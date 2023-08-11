const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

const cors = require("cors");

const problemDB = require('../models/contestInput');

router.get('/', async function(req,res){
    console.log("from contestRawInput");
    res.send('from contestRawInput');
})
router.post ('/submit',async (req,res)=>{ 

   console.log("hi from submit contestRawProblem");
 
   const {day, contestdurationHour,contestdurationMinutes,name,problemIdList} = req.body;
   console.log("daysRemaining from db:"+day);
   
     try{

            console.log('newProblem');
            //add to database;
            const newProblem = await new problemDB({day, contestdurationHour,contestdurationMinutes,name,problemIdList}).save();
            //include acceptedList after accepted
            console.log("contest Raw data:"+newProblem);
            res.status(201).json({success:true});
        
         
     }catch(err){
        return res.status(500).json({success:false, err: JSON.stringify(err)});
     }
        
 });
 
 
 router.get ('/contestDetailse',async (req,res)=>{ 
    
    
    let id = req.headers.id;
    console.log("id from contestDetailse:"+id);
    try{
             const user = await problemDB.findOne({name:id});
             console.log("days remaining "+ user.day);

              
            return res.status(201).json({success:true, day:user.day,contestdurationMinutes:user.contestdurationMinutes, problemIdList:user.problemIdList,
                name:user.name})

         
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
 router.delete('/delete', async(req,res)=>{

    try{  
             await problemDB.deleteMany({});
             console.log('deleted all data')
          
         }         
      catch(err){
        console.log('could not deleted all data')

      //return res.status(400).json({success:false, error:JSON.stringify(err)});
   }
 
 });

 
module.exports=  router;
