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
        type : Number,
        required : true
    }
},{ timestamps : true })


const Product = mongoose.model('Product',ProductSchema);


module.exports = Product;