const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true,  },
    password: { type: String, required: true },
  
    address: { type: String, trim: true },
    gender: { type: String, enum: ['M','F'] },
    profileImage: { type: String }, // URL for profile image
    status: { type: Boolean,default:true },
    lastLogin: { type: Date },
  },
  { timestamps: true } // Auto add createdAt & updatedAt
);

module.exports = mongoose.model('User', userSchema);
