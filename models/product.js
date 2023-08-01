const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({
    
    name:{
        type:String,
        reuired:true,
        //unique: true,
    },
    description:{
        type:String,
        reuired:true,
    } ,
    
    image:{
        type:String,
        default:'',
    } ,
    price:{
        type:Number,
        reuired:true,
    },
    quantity:{
        type:Number,
        required:true
    },
    
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

//module.exports = mongoose.model('Product', productSchema);