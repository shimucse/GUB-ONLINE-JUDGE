const express = require('express');
const router = express.Router();

const cors = require("cors");
const userDb = require('../models/user');

const jwt = require('jsonwebtoken');


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
          return res.status(201).json({success:true,newUser});
        
         
     }catch(err){
        return res.status(500).json({success:false, err: JSON.stringify(err)});
     }
        
 });
 router.post ('/login',async (req,res)=>{ 
    console.log('login')
 
    const {email,password}= req.body;
    
   
     try{
         
         
          const user = await  userDb.findOne(
            {
                 email:email,
                 password:password,
            });
                if(user){

                    const token = jwt.sign({
                        name:user.firstName,
                        email:user.email,

                    }, 'secret123')
                    //console.log('login sucess'); 
                    return res.status(201).json({success:true,user:token});

                }
                else{
                   // console.log("wrong email or pass")
                    return res.status(500).json({success:false, user:false});


                }
         
     }catch(err){
        return res.json({status:'error', user:false})

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
 router.get ('/quote',async (req,res)=>{ 
    console.log('quote')
    const token = req.headers['x-access-token']   
    
    
     try{
             const decode = jwt.verify(token, 'secret123');
             const email = decode.email;
            console.log("gmail"+ email);
             const user = await userDb.findOne({email:email});
             console.log("userFirstName"+ user.firstName);
              
            return res.status(201).json({success:true, firstName:user.firstName})

         
     }catch(error){
        return res.status(500).json({status:'error', error:'invalid token'})

     }
        
 });
 router.post ('/quote',async (req,res)=>{ 
    console.log('quote')
    const token = req.header['x-access-token']  
   

    
    try{
            const decode = jwt.verify(token, 'secret123');
         //   const email = decoded.email;
         //   await userDb.updateOne({email:email},{$set:{firstName:req.body.firstName}})
              
            return res.status(201).json({success:true})
         
     }catch(error){
        return res.status(500).json({status:'error', error:'invalid token'})

     }
        
 });
 
module.exports = router;