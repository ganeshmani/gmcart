const express = require('express');
const router = express.Router();
const Product = require('../schema/product.schema');
const User = require('../schema/user.schema');
const mongoose = require('mongoose');
const Joi = require('joi');


router.post('/product/save',async (req,res) => {
    try{

        let product = new Product();

        product.productname = req.body.productname;
        product.price = req.body.price;
        product.currency = req.body.currency;
        product.image = req.body.image;


        await product.save();

        res.status(200).json({
            message : 'success'
        })

    }
    catch(e){

        console.log("error",e);

        res.status(500).json({
            message : 'failed'
        });
    }
})

router.get('/product/list', async (req,res) => {

    try{

        let product = await Product.find({});

        if(product){

            res.status(200).json({
                status : 1,
                message : 'success',
                data : product
            })
        }
        else{

            res.status(200).json({
                status : 1,
                message : 'sucess',
                data : null
            })
        }
    }
    catch(e){
        console.log("error",e);
        res.status(500).json({
            status : 0,
            message : 'failed',
            data : null
        })
    }
});


module.exports = router;