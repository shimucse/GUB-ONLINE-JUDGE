const express = require('express');
const router = express.Router();

const cors = require("cors");
const userDb = require('../models/user');




router.get('/', async function(req,res){
    console.log("registration")
    res.send('registration');
});
router.post ('/register',async (req,res)=>{ 
    console.log('registered')
 
    const {firstName, lastName,email,password}= req.body;
    
   
     try{
         
         
          const newUser = await new userDb({email,firstName, lastName,password}).save();
          console.log("newUser"+newUser);
          res.status(201).json({success:true,newUser});
        
         
     }catch(err){
        return res.status(500).json({success:false, err: JSON.stringify(err)});
     }
        
 });
 
 router.delete('/delete', async(req,res)=>{

    try{  
             await userDb.deleteMany({});
             console.log('deleted all data')
          
         }         
      catch(err){
        console.log('could not deleted all data')

      //return res.status(400).json({success:false, error:JSON.stringify(err)});
   }
 
 });
 router.get('/read', async(req,res)=>{
    console.log("read from ProblemAdd");
    try{
        const listOfProblem = await userDb.find();
        console.log("listOfProblem"+listOfProblem);

    }catch(err){
         console.log(err);
         res.status(500).json({ error: 'server error' });

    }
  
 })
 
module.exports = router;