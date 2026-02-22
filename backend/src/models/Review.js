import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true,
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reviewedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  transaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  aspectRatings: {
    accuracy: { type: Number, min: 1, max: 5 },
    communication: { type: Number, min: 1, max: 5 },
    reliability: { type: Number, min: 1, max: 5 },
  },
  verified: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

ReviewSchema.index({ property: 1 });
ReviewSchema.index({ reviewer: 1 });
ReviewSchema.index({ reviewedUser: 1 });

export default mongoose.model('Review', ReviewSchema);
