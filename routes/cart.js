const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cart');
const { isAuth } = require('../middlewares/auth');

router.get('/getCarts', cartController.getAllCarts)
router.post('/getCart', cartController.getCart)
router.post('/createcart', cartController.addCart)
router.post('/updatequantity', cartController.updateQuantity)
router.post('/addtocart', cartController.addToCart)
router.post('/removefromcart', cartController.removeFromCart)
router.put('/placecart', cartController.placeCart)

module.exports = router;