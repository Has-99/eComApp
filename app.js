const express = require ('express');
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/user');

const User = require('./models/user');

const app = express();

/*app.use((req, res, next) => {
    req.on('data',(chunk) => {
        const data= JSON.parse(chunk)
        req.body = data;
        next(); 
    });
});*/

app.use(express.json());
app.use(userRouter);

/*const test = async (email, password) => {
    const user = await User.findOne({email: email});
    const result = await user.comparePassword(password);
    console.log(result);
};

test ('anne01@gmail.com' , '1234abcd');*/



app.get('/test',(req,res) => {
    res.send('Hello World')
});

/*app.post('/create-user',async (req, res) => {
    res.json(req.body);
    const isNewUser = await User.isThisEmailInUse(email);
    if(!isNewUser)
    return res.json({
        success: false,
        message: 'This email is already used, try Sign-in',
    });
    const user = await User({
        fullname: '   ',
        email: email, 
        password: '   ',
    });
    await user.save();
    res.json(user);
});*/

app.get('/',(req,res)=> {
    res.json({success: true, message: 'Welcome to the backend!'});
});

app.listen(8000, () => {
    console.log('port is listening')
}); 

//mongodb+srv://dbUser:<password>@ecomapp.55ymzj8.mongodb.net/