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
    
   //if password is found in db then return  
   /*if(code === undefined){
      return res.status(400).json({success:false, error:"Empty code body!"});
    }*/
    
     try{
         
         
          const newUser = await new userDb({firstName, lastName,email,password}).save();
          console.log("newUser"+newUser);
          res.status(201).json({success:true,newUser});
        
         
     }catch(err){
        return res.status(500).json({success:false, err: JSON.stringify(err)});
     }
        
 });
 

module.exports = router;