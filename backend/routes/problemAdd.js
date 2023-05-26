const express = require('express');
const router = express.Router();

const cors = require("cors");

const problemDB = require('../models/problem');

router.get('/', async function(req,res){
    console.log("from problemAdd")
    res.send('from ProblemAdd ');
})
router.post ('/submit',async (req,res)=>{ 
 
    const problemId = req.body.id;
    console.log("problem id: "+ problemId); 
    
     try{
        //add to database;
        res.status(201).json({success:true});
        
         
     }catch(err){
        return res.status(500).json({success:false, err: JSON.stringify(err)});
     }
        
 });
 
 
 
module.exports=  router;
