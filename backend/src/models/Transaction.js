import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true,
  },
  priceAtPurchase: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'USD',
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'success', 'failed', 'completed'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    enum: ['stripe', 'crypto', 'bank_transfer'],
    default: 'stripe',
  },
  stripePaymentIntentId: String,
  transactionHash: String, // For blockchain-based transactions
  escrowAmount: Number,
  escrowReleased: {
    type: Boolean,
    default: false,
  },
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completedAt: Date,
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for queries
TransactionSchema.index({ buyer: 1, createdAt: -1 });
TransactionSchema.index({ seller: 1, createdAt: -1 });
TransactionSchema.index({ property: 1 });
TransactionSchema.index({ status: 1 });

export default mongoose.model('Transaction', TransactionSchema);
