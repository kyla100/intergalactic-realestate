import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  galaxy: {
    type: String,
    required: true,
    enum: [
      'Milky Way',
      'Andromeda',
      'Triangulum',
      'Large Magellanic Cloud',
      'Small Magellanic Cloud',
      'Other',
    ],
  },
  planet: {
    type: String,
    required: true,
    // Examples: "Mars", "Kepler-452b", "Alpha Centauri b", etc.
  },
  location: {
    type: String,
    required: true,
    // Examples: "Northern Hemisphere", "Valles Marineris Region", etc.
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  currency: {
    type: String,
    default: 'USD',
  },
  area: {
    value: Number,
    unit: {
      type: String,
      enum: ['m²', 'km²', 'hectares'],
      default: 'km²',
    },
  },
  features: [
    {
      name: String,
      description: String,
      // Examples: "Radiation Shielding", "Oxygen Generation", "Water Reserves", "Proximity to Wormhole"
    },
  ],
  images: [String], // Array of image URLs
  mainImage: String,
  status: {
    type: String,
    enum: ['available', 'under-offer', 'sold'],
    default: 'available',
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  totalReviews: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  favorites: {
    type: Number,
    default: 0,
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

// Index for search and filtering
PropertySchema.index({ galaxy: 1, planet: 1, price: 1, status: 1 });
PropertySchema.index({ seller: 1 });

export default mongoose.model('Property', PropertySchema);
