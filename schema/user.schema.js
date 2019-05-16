const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    hash: String,
    salt: String,
    products : [
        { type : mongoose.Schema.Types.ObjectId,ref : 'Product' }
    ]
},{ timestamps : true })

UserSchema.methods.validPassword = function(password){
    
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};
  
UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');

    return this.hash;
};


module.exports = mongoose.model('User',UserSchema); 