const express = require('express');
const router = express.Router();

const products = require('../data.js').data;

// Sample product data
router.get('/', (req, res) => {
    const { limit, page } = req.query; // Pagination  limit: 50, page: 1
    console.log('req.query', req.query.limit);
    res.json(products);

});
router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);
    res.json(product);
});
router.post('/', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    res.json(newProduct);
});
router.put('/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const updatedProduct = req.body;
    const productIndex = products.findIndex(p => p.id === productId);
    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
});
router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const productIndex = products.findIndex(p => p.id === productId);
    products.splice(productIndex, 1);
    res.sendStatus(204);
});


module.exports = router;