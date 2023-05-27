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
    console.log("problem id: "+ id); 
    console.log("problem name: "+ name); 
    console.log("problem description: "+ description); 

    console.log("first sample input: "+ firstSampleInput); 
    console.log("second sample input: "+ secondSampleInput); 

    
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
 
 
 
module.exports=  router;
