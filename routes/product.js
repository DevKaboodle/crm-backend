const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../contollers/product');

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
