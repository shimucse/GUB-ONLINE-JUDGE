const mongoose = require ('mongoose');

const contestInputSchema = mongoose.Schema({
    daysRemaining:{
        type:Number
    },
    contestdurationHour:{
        type:Number
    },
    contestdurationMinutes:{
        type:Number
    },
    name:{
         type:String,
         unique:true
    },
    problemIdList:{
        type:[]
    }

});
const contestInputBd = new mongoose.model("contestinputBd", contestInputSchema);
module.exports =contestInputBd;