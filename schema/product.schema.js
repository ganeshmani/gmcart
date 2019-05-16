const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productname : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    currency : {
        type : String,
        required : true
    },
    image : {
        type : String
    }
},{ timestamps : true })


const Product = mongoose.model('Product',ProductSchema);


module.exports = Product;