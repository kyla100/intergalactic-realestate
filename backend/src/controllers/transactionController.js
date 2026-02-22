import Transaction from '../models/Transaction.js';
import Property from '../models/Property.js';
import User from '../models/User.js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create checkout session
export const createCheckoutSession = async (req, res) => {
  try {
    const { propertyId } = req.body;

    const property = await Property.findById(propertyId).populate('seller');
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: property.currency.toLowerCase(),
            product_data: {
              name: property.title,
              description: `${property.planet} - ${property.galaxy}`,
              images: property.mainImage ? [property.mainImage] : [],
            },
            unit_amount: Math.round(property.price * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/property/${propertyId}`,
      customer_email: req.email,
      metadata: {
        propertyId: propertyId,
        buyerId: req.userId,
        sellerId: property.seller._id.toString(),
      },
    });

    res.status(200).json({ sessionId: session.id, clientSecret: session.client_secret });
  } catch (error) {
    res.status(500).json({ message: 'Error creating checkout session', error: error.message });
  }
};

// Handle webhook for payment success
export const handlePaymentWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // Create transaction
      const transaction = new Transaction({
        buyer: session.metadata.buyerId,
        seller: session.metadata.sellerId,
        property: session.metadata.propertyId,
        priceAtPurchase: session.amount_total / 100,
        stripePaymentIntentId: session.payment_intent,
        status: 'success',
        paymentMethod: 'stripe',
      });

      await transaction.save();

      // Update property status
      await Property.findByIdAndUpdate(
        session.metadata.propertyId,
        { status: 'sold' },
        { new: true }
      );

      // Update user stats
      await User.findByIdAndUpdate(session.metadata.buyerId, {
        $inc: { totalPurchases: 1 },
      });

      await User.findByIdAndUpdate(session.metadata.sellerId, {
        $inc: { totalSales: 1 },
      });
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
};

// Get user's transactions
export const getUserTransactions = async (req, res) => {
  try {
    const { type } = req.query; // 'buys' or 'sells'

    let query = {};
    if (type === 'buys') {
      query.buyer = req.userId;
    } else if (type === 'sells') {
      query.seller = req.userId;
    } else {
      query = {
        $or: [{ buyer: req.userId }, { seller: req.userId }],
      };
    }

    const transactions = await Transaction.find(query)
      .sort({ createdAt: -1 })
      .populate('property', 'title mainImage planet galaxy')
      .populate('buyer', 'firstName lastName profilePicture')
      .populate('seller', 'firstName lastName profilePicture');

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error: error.message });
  }
};

// Get transaction details
export const getTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findById(id)
      .populate('property')
      .populate('buyer', 'firstName lastName profilePicture email')
      .populate('seller', 'firstName lastName profilePicture email');

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transaction', error: error.message });
  }
};
