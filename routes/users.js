const express = require('express');
const router = express.Router();
const Product = require('../schema/product.schema');
const User = require('../schema/user.schema');
const mongoose = require('mongoose');
const Joi = require('joi');


router.post('/login', async (req,res) => {

    const validationSchema = Joi.object().keys({
        'username' : Joi.string().required(),
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
            
            User.findOne(
                { 
                    $or : [ { 'username' : req.body.username },{ 'email' : req.body.username } ]
                }).populate('products').exec((e,user) => {
                    console.log("user",user);
                

            // console.log("user",user);    

            if(user && user.validPassword(req.body.password)){

                res.status(200).json({
                    status : 1,
                    message : 'login successfully',
                    data : user
                })
            }
            else{
                res.status(200).json({
                    status : 0,
                    message : 'Invalid Credentials',
                    data : null
                })
            }
          });      
        }
        catch(e){
            console.log("Error",e);    
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

            let user = new User();

            user.username = req.body.username;
            user.email = req.body.email;
            user.password = user.setPassword(req.body.password);
            
            console.log(`password => ${req.body.password}`);
            console.log("user =>",user);
            await user.save()

            res.status(200).json({
                status : 1,
                message : 'success',
                data : user
            })
        }
        catch(e){
            console.log(e);
            res.status(500).json({
                message : 'failed',
                data : null
            })
        }
    }
})


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
  
          let user =  await User.updateOne({ '_id' : mongoose.Types.ObjectId(req.body.userid) },{
              $push : {
                  products : mongoose.Types.ObjectId(req.body.productid)
              } 
          })

         User.findById(req.body.userid).populate('products').exec((e,user) => {

            res.status(200).json({
                status : 1,
                message : 'product added successfully',
                data : user
            })

          });;

         
        }
        catch(e){
            console.log("Error",e);
            res.status(500).json({
                status : 0,
                message : 'something went wrong'
            });

        }
    }
})


router.post('/removeitem', async (req,res) => {
    const validationSchema = Joi.object().keys({
        'userid' : Joi.string().required(),
        'productid' : Joi.string().required()
    });

    const { error, value } = Joi.validate(req.body,validationSchema);

    if(error){

        res.status(400).json({
            status : 0,
            message : error.details[0].message
        })

    }
    else{

        try{

            User.findById(mongoose.Types.ObjectId(req.body.userid)).populate('products').exec(async (e,user) =>{

                let products = user.products;
                console.log("req product id",req.body.productid);
                console.log("req product id",typeof(req.body.productid));
                console.log("products",products);
    
                let updatedProduct = products.filter((item) => {
                      console.log(item._id != req.body.productid);
                      return item._id != req.body.productid;
                });
    
                console.log("updatedPRoduct",updatedProduct);
    
                user.products = updatedProduct;
    
                await user.save();
    
                // await User.updateOne({ _id : mongoose.Types.ObjectId(req.body.userid) },{
                //     $set : {
                //         products : updatedProduct
                //     }
                // })
    
                res.status(200).json({
                    message : 'success',
                    data : user
                })

            });

           

        }
        catch(e){

            res.status(500).json({
                message : 'Something went wrong',
                data : null
            })

        }
    }
})




module.exports = router;