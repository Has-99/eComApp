// const express = require('express');

// const router = express.Router();
// const {createProduct} = require('../controllers/product')

// router.post('/create-product', createProduct);

// module.exports = router;

const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getByID);
router.get('/productsbyprice/:n', productController.getByPrice);
router.post('/products', productController.addProduct)
router.put('/products/:id', productController.updateProduct)
router.delete('/products/:id', productController.deleteProduct)

module.exports = router;