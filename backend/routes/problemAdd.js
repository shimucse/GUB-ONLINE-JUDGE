const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

const cors = require("cors");

const problemDB = require('../models/problem');

router.get('/', async function(req,res){
    console.log("from problemAdd")
    res.send('from ProblemAdd ');
})
router.post ('/submit',async (req,res)=>{ 
 
    const {id,name,description,inputFormat,outputFormat,
        firstSampleInput,firstSampleOutput,secondSampleInput,
        secondSampleOutput,
        problemSetterAllInputOutputTestCase,timeLimit,memoryLimit,problemSetterName
        } = req.body;
   
    const acceptCounter=0;
     try{
        console.log('newProblem');

        //add to database;
        const newProblem = await new problemDB({id,name,description,inputFormat,outputFormat,
            firstSampleInput,firstSampleOutput,secondSampleInput,
            secondSampleOutput,problemSetterAllInputOutputTestCase
            ,timeLimit,memoryLimit,problemSetterName,acceptCounter
            }).save();
        //include acceptedList after accepted
        console.log("newProblem:"+newProblem);
        res.status(201).json({success:true});
        
         
     }catch(err){
        return res.status(500).json({success:false, err: JSON.stringify(err)});
     }
        
 });

 router.get('/fetch/:id',async function(req,res){
      fetchid = req.params.id;
      console.log("fetchid "+ fetchid);



      try{
        const data = await problemDB.find({id:fetchid})
        console.log('data'+data);
        res.send(data);

    }catch(err){
         console.log(err);
         res.status(500).json({ error: 'server error' });

    }

 });
 router.get ('/problemDetailse',async (req,res)=>{ 
    
    
    let id = req.headers.id;
    //console.log("id from problemDetailse:"+id);
     try{
             const user = await problemDB.findOne({id:id});
             //console.log("userFirstName"+ user.firstName);

              
            return res.status(201).json({success:true, acceptCounter:user.acceptCounter, acceptedList:user.acceptedList,
                name:user.name,})

         
     }catch(error){
        return res.status(500).json({status:'error', error:'invalid token'})

     }
        
 });
 router.get('/read', async(req,res)=>{
    console.log("read from ProblemAdd");
    try{
        const listOfProblem = await problemDB.find();
        res.send(listOfProblem);

    }catch(err){
         console.log(err);
         res.status(500).json({ error: 'server error' });

    }
  
 })
 router.put('/updateProblem',async(req,res)=>{

    console.log("update problem from problemAdd");
     
    const {acceptCounter,acceptedList,id}=req.body;
     
    console.log ("problemId : "+id 
    + "acceptCounter"+acceptCounter+"acceptedList:"+acceptedList);
    try{
        await problemDB.updateOne
            (
                {id:id},
                { $set: 
                    {
                        acceptCounter:acceptCounter,
                        acceptedList:acceptedList
                   
                    }
            }
            )
            return res.status(201).json({success:true,user:true});

    }catch(err){
        return res.json({status:'error', user:false})

    }
    
   
})

 
module.exports=  router;
