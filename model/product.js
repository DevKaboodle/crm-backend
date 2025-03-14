const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true }, 
    name: { type: String, required: true, trim: true }, 
    sku: { type: String, required: true, unique: true, trim: true }, // Unique product code
    description: { type: String, required: true, trim: true }, 
    price: { type: Number, required: true }, 
    stock: { type: Number, required: true, min: 0 }, 
    weight: { type: Number, required: true }, // Gold weight in grams
    karat: { type: String, enum: ['14K', '18K', '22K', '24K'], required: true }, 
    images: [{ type: String }], // Array of image URLs
    category: { type: String, required: true, trim: true }, 
    status: { type: String, enum: ['available', 'out of stock', 'discontinued'], default: 'available' }, 
  },
  { timestamps: true } // Auto add createdAt & updatedAt
);

module.exports = mongoose.model('Product', productSchema);
