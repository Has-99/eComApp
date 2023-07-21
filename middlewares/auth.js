const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.isAuth = async(req, res, next) => {

    if(req.headers && req.headers.authorization){
        const token = req.headers.authorization.split(' ') [1];

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decode.userId);
        if(!user){
            return res.json({success: false, message: 'unauthorized access!'});
        }

        req.user = user;
        next();
            
        } catch (error) {
            if(error.name == 'JsonWebTokenError'){
                return res.json({success: false, message: 'unauthorized access!'});
            }

            if(error.name == 'JsonExpiredTokenError'){
                return res.json({success: false, message: 'Session expired,SignIn again!'});
            }

            res.json({success: false, message: 'Session expired,SignIn again!'}); 
        }

    }else {
        res.json({success: false, message: 'Internal servrer error!'});
    }
    //console.log(req.headers.authorization)

};