const Product = require('../models/product');

async function getAllProductsStatic (req, res) {
    const products = await Product.find({})
    res.status(200).json({message: 'products testing route', products});
}

function queryObject(query) {
    const queryObject = {}
    Object.keys(query).map(prop => {
        const value = query[prop]
        value ? queryObject[prop] = value : null;
    })
    return queryObject
}

async function getAllProducts (req, res) {
    const products = await Product.find(queryObject(req.query));
    res.status(200).json({message: 'products route', products})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}