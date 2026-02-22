import express from 'express';
import {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
  getUserProperties,
} from '../controllers/propertyController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getProperties);
router.get('/:id', getProperty);
router.get('/user/:id', getUserProperties);

// Protected routes (seller only)
router.post('/', authenticate, createProperty);
router.patch('/:id', authenticate, updateProperty);
router.delete('/:id', authenticate, deleteProperty);

export default router;
