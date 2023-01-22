const Product = require('../models/product');

async function getAllProductsStatic (req, res) {
    const products = await Product.find({})
    res.status(200).json({message: 'products testing route', products});
}

const propLogic = (prop, value) => {
    switch(prop) {
        case 'name': return {$regex: value, $options: 'i'};
        default: return value;
    }
}

function queryObject(query) {
    const queryObject = {}
    Object.keys(query).map(prop => {
        const value = query[prop]
        value ? queryObject[prop] = propLogic(prop, value) : null;
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