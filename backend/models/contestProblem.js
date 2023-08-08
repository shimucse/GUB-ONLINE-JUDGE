const mongoose = require('mongoose');

const ContestproblemSchema = mongoose.Schema({

   id:{
       type:String,
       required:true,
       unique:true,
   },
   name:{
     type:String,
     required:true
   },
   timeLimit:{
     type :String
   },
   memoryLimit:{
     type:String
   },
   description:{
     type:String,
     required:true
   },
   inputFormat:{
     type:String
     
   },
   outputFormat:{
      type:String

   },
   firstSampleInput:{
       type:[],
       required:true
   },
   firstSampleOutput:{
       type:[],
       required:true
   },
   secondSampleInput:{
       type:[],
       required:true
   },
   secondSampleOutput:{
       type:[],
       required:true
   },
   problemSetterAllInputOutputTestCase:[
      {
        setterInput:{type:String},
        setterOutput:{ type:String}

    }
  ],
  
   input:{
     type:String
   },
   
   
   problemAddDate:{
        type:Date,
        default:Date.now

   }  ,
   problemSetterName:{
    type:String,
    required:true,
 },
 acceptedList:[{
      userEmail:{
        type:String
      }
   }],
   acceptCounter:{
     type:Number
   },



});

const problemDB = new mongoose.model('contestProblem', ContestproblemSchema)


module.exports = contestProblem;