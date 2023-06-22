const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

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
    },
    country:{
        type:String
    },
    university:{
        type:String
    },
    img:{
        type:String
    }


});

const userDb = new mongoose.model('user', UserSchema)


module.exports = userDb;