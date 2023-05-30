const express = require('express');
const router = express.Router();

const cors = require("cors");

const problemDB = require('../models/problem');

router.get('/', async function(req,res){
    console.log("from problemAdd")
    res.send('from ProblemAdd ');
})
router.post ('/submit',async (req,res)=>{ 
 
    const {id,name,description,inputFormat,outputFormat,
        firstSampleInput,firstSampleOutput,secondSampleInput,
        secondSampleOutput,problemSetterAllInputTestCase,
        problemSetterAllOutputTestCase,timeLimit,memoryLimit
        } = req.body;
   
    
     try{
        //add to database;
        const newProblem = await new problemDB({id,name,description,inputFormat,outputFormat,
            firstSampleInput,firstSampleOutput,secondSampleInput,
            secondSampleOutput,problemSetterAllInputTestCase,
            problemSetterAllOutputTestCase,timeLimit,memoryLimit
            }).save();
        //include acceptedList after accepted
        console.log('newProblem'+newProblem);
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
 
 
module.exports=  router;
