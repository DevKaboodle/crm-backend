const Product = require('../model/product');

const createProduct = async (req, res) => {
  try {
    const obj={...req.body,productId:generateUniqueCode()};
    const product = new Product(obj);
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 const generateUniqueCode = () => {
  const currentTimestamp = Date.now().toString();
  const randomValue = Math.random().toString();

  const combinedString = currentTimestamp + randomValue;

  const hash = crypto.createHash("sha256").update(combinedString).digest("hex");

  return hash.substring(0, 10);
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
