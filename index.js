const express = require('express');
const serverless = require('@vendia/serverless-express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

const app = express();
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Export for Vercel Serverless
module.exports = app;
module.exports.handler = serverless({app});
