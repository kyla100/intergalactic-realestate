import Property from '../models/Property.js';

// Get all properties with filters
export const getProperties = async (req, res) => {
  try {
    const {
      galaxy,
      planet,
      minPrice,
      maxPrice,
      status,
      sortBy,
      page = 1,
      limit = 12,
    } = req.query;

    // Build filter object
    const filter = {};
    if (galaxy) filter.galaxy = galaxy;
    if (planet) filter.planet = { $regex: planet, $options: 'i' };
    if (status) filter.status = status;

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }

    // Determine sort order
    let sortOrder = { createdAt: -1 };
    if (sortBy === 'price-low') sortOrder = { price: 1 };
    if (sortBy === 'price-high') sortOrder = { price: -1 };
    if (sortBy === 'newest') sortOrder = { createdAt: -1 };
    if (sortBy === 'rating') sortOrder = { rating: -1 };

    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Get properties
    const properties = await Property.find(filter)
      .sort(sortOrder)
      .skip(skip)
      .limit(parseInt(limit))
      .populate('seller', 'firstName lastName profilePicture rating');

    const total = await Property.countDocuments(filter);

    res.status(200).json({
      properties,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error: error.message });
  }
};

// Get single property
export const getProperty = async (req, res) => {
  try {
    const { id } = req.params;

    const property = await Property.findById(id).populate(
      'seller',
      'firstName lastName profilePicture rating totalReviews bio'
    );

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Increment views
    property.views += 1;
    await property.save();

    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching property', error: error.message });
  }
};

// Create property (seller only)
export const createProperty = async (req, res) => {
  try {
    const { title, description, galaxy, planet, location, price, area, features, images } =
      req.body;

    // Validation
    if (!title || !description || !galaxy || !planet || !location || !price) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const property = new Property({
      title,
      description,
      galaxy,
      planet,
      location,
      price,
      area,
      features,
      images,
      mainImage: images?.[0] || null,
      seller: req.userId,
    });

    await property.save();

    res.status(201).json({
      message: 'Property created successfully',
      property,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating property', error: error.message });
  }
};

// Update property
export const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, location, status, images, features } = req.body;

    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Check if user is seller
    if (property.seller.toString() !== req.userId) {
      return res.status(403).json({ message: 'You are not authorized to update this property' });
    }

    // Update fields
    if (title) property.title = title;
    if (description) property.description = description;
    if (price) property.price = price;
    if (location) property.location = location;
    if (status) property.status = status;
    if (images) {
      property.images = images;
      property.mainImage = images[0];
    }
    if (features) property.features = features;
    property.updatedAt = new Date();

    await property.save();

    res.status(200).json({
      message: 'Property updated successfully',
      property,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating property', error: error.message });
  }
};

// Delete property
export const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;

    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    // Check if user is seller
    if (property.seller.toString() !== req.userId) {
      return res.status(403).json({ message: 'You are not authorized to delete this property' });
    }

    await Property.findByIdAndDelete(id);

    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting property', error: error.message });
  }
};

// Get user's properties
export const getUserProperties = async (req, res) => {
  try {
    const { id } = req.params;

    const properties = await Property.find({ seller: id }).sort({ createdAt: -1 });

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error: error.message });
  }
};
