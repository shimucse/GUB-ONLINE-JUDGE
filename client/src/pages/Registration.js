import React , { useState,useEffect } from "react";
import '../pagesCss/Registration.css'
import Axios from 'axios';

const Registration = ()=>{
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');

    const[email, setEmail] = useState('');

    const[password, setPassword] = useState('');

    const registerUser = async(e)=>{
        e.preventDefault();


        console.log("registerUserFunc");
             try{

              
                 const  payload = {
                    firstName : firstName,
                    lastName:lastName ,
                    email:email,
                    password:password,
                  
                  };
          
              const {data} = await Axios.post("http://localhost:5000/RegistraionAndLogin/register", payload);
             // setJobId(data.jobId);                         
              
        }
        catch({response}){
              if(response){
                 const errMsg = response.data.err;
                 console.log("error from registration")
           }else{
              console.log("Error connecting to server!");
           }
        }
       
        
        }
    return(
            <>
               <div className="body_column">  
                     <h1>Register</h1>      
                    <div className="login_form">
                        <span className="signup_page_header">Signup into GUB Online Judge</span>


                        <form onSubmit={registerUser} >
                            <label for="firstName">First Name:</label>
                            <input
                                 type="text" 
                                 id="first_name" 
                                 name="firstName"
                                 value={firstName}
                                 onChange={(e)=>setFirstName(e.target.value)}
                            />
                            <br/><br/>

                            <label for="email">LastName:</label>
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    name="lastName"
                                    value={lastName}
                                 onChange={(e)=>setLastName(e.target.value)}
                                /><br/><br/>

                                <label for="email">Email:</label>
                                <input 
                                    type="email"
                                    id="email" 
                                    name="email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                /><br/><br/>

                                <label for="pwd">Password:</label>
                                <input 
                                    type="password"
                                    id="pwd"
                                    name="pwd"
                                    minlength="8"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                /><br/><br/>

                               

                                <input type="submit" value="Signup"/><br/><br/><br/><br/>
                                <label for="text">Already a member? </label>
                                <a href={""}>Log In </a><br/><br/>
                 
               
                        </form> 
                        
                    </div>
                </div>

</>
    );
   
}
export default Registration;