const mongoose = require('mongoose');

const problemSchema = mongoose.Schema({

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
     type :Number
   },
   memoryLimit:{
     type:Number
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
       type:String,
       required:true
   },
   firstSampleOutput:{
       type:String,
       required:true
   },
   secondSampleInput:{
       type:String,
       required:true
   },
   secondSampleOutput:{
       type:String,
       required:true
   },
   problemSetterAllInputTestCase:{
      type:String
   },
   problemSetterAllOutputTestCase:{
      type:String

   },
   problemSetterName:{
      type:String,
      required:true,
      default:"Before login signUp system"
   },
   problemAddDate:{
        type:Date,
        default:Date.now

   },
   acceptedList:[{
      type:String
   }]


});

const problemDB = new mongoose.model('problem', problemSchema)


module.exports = problemDB;