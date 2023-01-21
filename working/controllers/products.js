const Product = require('../models/product');

async function getAllProductsStatic (req, res) {
    const products = await Product.find({})
    res.status(200).json({message: 'products testing route', products});
}

async function getAllProducts (req, res) {
    const products = await Product.find(req.query);
    res.status(200).json({message: 'products route', products})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}