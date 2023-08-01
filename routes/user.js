const express = require('express');

const router = express.Router();
const {createUser} = require('../controllers/user');
const {
    validateUserSignUp, 
    userVlidation,
    validateUserSignIn, 
} = require ('../middlewares/validation/user');
const {userSignIn} = require('../controllers/user')
const {isAuth} = require('../middlewares/auth')

router.post('/create-user', validateUserSignUp, userVlidation,  createUser);
router.post('/sign-in',validateUserSignIn, userVlidation ,userSignIn);
router.post('/create-post', isAuth , (req, res) => {
    res.send('Welcome you are in secret route')
});

// router.get('/test', (req, res) => {
//     res.send('Welcome you are in secret route')
// })

module.exports = router;