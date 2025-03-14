const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const app = express();
app.use(cors());
app.use(express.json());

connectDB();
const PORT = process.env.PORT||3003;

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app; // Required for Vercel
