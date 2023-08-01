const Product = require('../models/product');

exports.createProduct = async (req, res) => {
    const {name, description, image, price, quantity} = req.body
    
    const product = await Product({
        name,
        description,
        image,
        price,
        quantity
    });
    await product.save();
    res.json( );
};
