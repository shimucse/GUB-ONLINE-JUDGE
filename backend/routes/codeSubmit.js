const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

const cors = require("cors");
const {generateFile} = require('../generateFile');

const {addJobToQueue} = require('../jobQueue');
const Job = require("../models/job");


router.get('/', function(req,res){
     res.send('from /codeSubmit');
})
router.get('/status',async(req,res)=>{
    //localhost:5000/status?id=
    const jobId = req.query.id;
    console.log("jobId"+jobId);
    if(jobId == undefined){
       console.log("job id not undefined")
        return res
             .status(400)
             .json({success : false, error: "missing id quory "})
    }
    try{
 
        const job = await  Job.findById(jobId);
 
          if(job === undefined){
             return res.status(404).json({success:false,error:"invalied job id"});
          }else{
             return res.status(200).json({success:true,job});
 
          }
         
       }
       catch(err){
       return res.status(400).json({success:false, error:JSON.stringify(err)});
    }
 
 });
 router.delete('/delete', async(req,res)=>{

    const jobId = req.query.id;
    if(jobId == undefined){
       console.log("job id not undefined")
        
    }try{  
            const result = await Job.deleteOne({"_id": new mongodb.ObjectId(jobId)});
            console.log(result);
         }         
      catch(err){
      //return res.status(400).json({success:false, error:JSON.stringify(err)});
   }
 
 });
 
 
 router.post ('/submit',async (req,res)=>{ 
 
    const {language='cpp',code} = req.body;
    const submitType = req.body.SubmitType;
    const input = req.body.input;
    console.log("userInput: "+ input);
       //console.log('total memory : ' + os.totalmem() + " bytes.");
      // console.log('free memory : ' + os.freemem() + " bytes.");
 
    
   if(code === undefined){
      return res.status(400).json({success:false, error:"Empty code body!"});
    }
    
     try{
         //need to generate a c++ file with content from the request 
         const filepath = await generateFile(language,code);
         // we need to run the file and send the response
 
          const job = await new Job({language,filepath,submitType,input}).save();
         // console.log("job from index :" + job);
         
         const jobId = job["_id"];
         addJobToQueue(jobId,filepath);
        res.status(201).json({success:true,jobId});
        
         
     }catch(err){
        return res.status(500).json({success:false, err: JSON.stringify(err)});
     }
        
 });
 
 
 
module.exports=  router;
