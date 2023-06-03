const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    password:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    firstName: {
        type : String,
        required:true,
        
    },
    lastName:{
        type:String,
        required:true,
    },
    submittedAt:{
        type:Date,
        default:Date.now
    },    
    problemSolvedList:{
        type:Number
    }


});

const userDb = new mongoose.model('user', UserSchema)


module.exports = userDb;