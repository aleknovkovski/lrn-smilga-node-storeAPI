const Product = require('../models/product');

async function getAllProductsStatic (req, res) {
    const products = await Product.find({})
    res.status(200).json({message: 'products testing route', products});
}

function queryObject(query, properties) {
    const queryObject = {}
    properties.map(property => {
        query[property] ? queryObject[property]=query[property] : null
    })
    return queryObject
}

async function getAllProducts (req, res) {
    const properties = ['featured', 'company', 'name']
    const products = await Product.find(queryObject(req.query, properties));
    res.status(200).json({message: 'products route', products})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}