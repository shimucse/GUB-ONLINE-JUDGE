const express = require('express');
const router = express.Router();

const cors = require("cors");
const userDb = require('../models/user');//

const jwt = require('jsonwebtoken');

const multer  = require('multer')
//setting options for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.get('/', async function(req,res){
    console.log("registration")
    res.send('registration');
});
router.post ('/register',async (req,res)=>{ 
    console.log('registered')
 
    const {firstName, lastName,email,password,country,university,img}= req.body;
    const ProblemAcceptedCounter=0;
   
     try{         
         
          const newUser = await new userDb({email,firstName, lastName,password,country,university,img,ProblemAcceptedCounter}).save();
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
 
 
 router.get ('/viewProfile',async (req,res)=>{ 
    const token = req.headers['x-access-token']   
    
    
     try{
             const decode = jwt.verify(token, 'secret123');
             const email = decode.email;
             console.log("gmail"+ email);
             const user = await userDb.findOne({email:email});
             //console.log("userFirstName"+ user.firstName);

              
            return res.status(201).json({success:true, firstName:user.firstName, lastName:user.lastName,
                img:user.img, email:user.email,ProblemAcceptedCounter:user.ProblemAcceptedCounter,
                acceptedList:user.acceptedList, UserAddDate:user.UserAddDate, university:user.university})

         
     }catch(error){
        return res.status(500).json({status:'error', error:'invalid token'})

     }
        
 });
 
 router.put('/updateUser',async(req,res)=>{

    console.log("update user from registrationAnd login");
     

    const ProblemAcceptedCounter = req.body.ProblemAcceptedCounter;
    const email = req.body.email;
    const acceptedList = req.body.problemSolvedList;
     
    console.log ("ProblemAcceptedCounter"+ProblemAcceptedCounter+"email:"+email);
    try{
        await userDb.updateOne
            (
                {email:email},
                { $set: 
                    {
                        ProblemAcceptedCounter:ProblemAcceptedCounter,
                        acceptedList:[acceptedList]
                   
                    }
            }
            )
            return res.status(201).json({success:true, user:true});

    }catch(err){
        return res.json({status:'error', user:false})

    }
    
   
})

 
module.exports = router;