const express = require('express');
const router = express.Router();
const Product = require('../schema/product.schema');
const User = require('../schema/user.schema');
const mongoose = require('mongoose');
const Joi = require('joi');

router.post('/login', async (req,res) => {

    const validationSchema = Joi.object().keys({
        'username' : Joi.string().required(),
        'password' : Joi.string.required()
    });

    const { error,value } = Joi.validate(req.body,validationSchema);

    if(error){

        res.status(400).json({
            message : error.details[0].message
        })
    }
    else{
        try{
  
            const user = await User.find(
                { 
                    $or : [ { 'username' : req.body.username },{ 'email' : req.body.email } ]
                });

            if(user && user.validPassword(req.body.password)){

                res.status(200).json({
                    status : 1,
                    message : 'login successfully'
                })
            }
            else{
                res.status(200).json({
                    status : 0,
                    message : 'Invalid Credentials'
                })
            }      
        }
        catch(e){
            
            res.status(500).json({
                status : 0,
                message : 'Something went wrong'
            })
        }
    }
})

router.post('/register', async (req,res) => {

    const validationSchema = Joi.object().keys({
        'username' : Joi.string().required(),
        'email' : Joi.string().required(),
        'password' : Joi.string().required()
    });

    const { error,value } = Joi.validate(req.body,validationSchema);

    if(error){
        res.status(400).json({
            message : error.details[0].message
        })
    }
    else{

        try{

            const user = new User();

            user.username = req.body.username;
            user.email = req.body.email;
            user.password = user.setPassword(req.body.password);

            await user.save()

            res.status(200).json({
                message : 'success',
                data : user
            })
        }
        catch(e){
            res.status(500).json({
                message : 'failed',
                data : null
            })
        }
    }
})

router.get('/product/list', async (req,res) => {

    try{

        const product = Product.find();

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
        res.status(500).json({
            status : 0,
            message : 'failed',
            data : null
        })
    }
});

router.post('/addtocart', async (req,res) => {

    const validationSchema = Joi.object().keys({
        'userid' : Joi.any().required(),
        'productid' : Joi.any().required()
    })

    const { error,value } = Joi.validate(req.body,validationSchema);

    if(error){
        res.status(400).json({
            message : error.details[0].message
        })
    }
    else{

        try{

          await User.updateOne({ '_id' : mongoose.Types.ObjectId(userid) },{
              $push : {
                  products : mongoose.Types.ObjectId(req.body.productid)
              } 
          })

          res.status(200).json({
              status : 1,
              message : 'product added successfully'
          })
        }
        catch(e){

            res.status(500).json({
                status : 0,
                message : 'something went wrong'
            });

        }
    }
})

router.post('/checkout', async (req,res) => {

    const validationSchema = Joi.object().keys({
        'userid' : Joi.any().required()
    });

    const { error,value } = Joi.validate(req.body,validationSchema);

    if(error){
        res.status(400).json({
            status : 0,
            message : error.details[0].message
        })
    }
    else{

        try{

            const user = User.findById(mongoose.Types.ObjectId(req.body.userid));

            // let products = user.products
        }
        catch(e){

        }

    }
})