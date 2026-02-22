import express from 'express';
import {
  createCheckoutSession,
  handlePaymentWebhook,
  getUserTransactions,
  getTransaction,
} from '../controllers/transactionController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Protected routes
router.post('/create-checkout-session', authenticate, createCheckoutSession);
router.get('/', authenticate, getUserTransactions);
router.get('/:id', authenticate, getTransaction);

// Webhook (no authentication required)
router.post('/webhook', express.raw({ type: 'application/json' }), handlePaymentWebhook);

export default router;
