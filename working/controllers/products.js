async function getAllProductsStatic (req, res) {
    res.status(200).json({message: 'products testing route'})
}

async function getAllProducts (req, res) {
    res.status(200).json({message: 'products route'})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}