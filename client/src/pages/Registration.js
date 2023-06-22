import React , { useState,useEffect } from "react";
import '../pagesCss/Registration.css'
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { image } from "@uiw/react-md-editor";


const Registration = ()=>{

    let navigate = useNavigate();


    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');

    const[email, setEmail] = useState('');

    const[password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [university, setUniversity] = useState('');
    const [token, setToken] = useState("");
    const [img, setImg] = useState();
    useEffect(()=>{
          setToken(localStorage.getItem('token')) ;
            console.log("token form registration:"+token);
    },[]

    );
    const registerUser = async(e)=>{
        e.preventDefault();


        console.log("registerUserFunc");
             try{

              
                 const  payload = {
                    firstName : firstName,
                    lastName:lastName ,
                    email:email,
                    password:password,
                    country:country,
                    university:university,
                    img:img

                  
                  };
          
              const {data} = await Axios.post("http://localhost:5000/RegistraionAndLogin/register", payload);
              //const {data} = await Axios.delete("http://localhost:5000/RegistraionAndLogin/delete");
            //  const data = await Axios.get("http://localhost:5000/RegistraionAndLogin/read");


             // setJobId(data.jobId); 
             console.log(data);       
             if(data.success === true)   {
                console.log('success true');
                 navigate('/Login');
             }
            alert('Registration completed  sucessfully');
                       
              
        }
        catch({response}){
              if(response){
                 const errMsg = response.data.err;
                 window.confirm('Email should be unique');

           }else{
              console.log("Error connecting to server!");
           }
        }
       
        
        }
    return(
            <>
          {token ?               
                    <h1>You are already registred</h1>        
                :
                    <div class="wrap">

                        <div className="body_column">  
                                <h1>Register</h1>      
                                <div className="registraion_form">
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
                                                minlength="7"
                                                value={password}
                                                onChange={(e)=>setPassword(e.target.value)}
                                            /><br/><br/>
                                        <label for="pwd">Country:</label>

                                            <input 
                                                type="text"
                                                id="text"
                                                name="Country"
                                                value={country}
                                                onChange={(e)=>setCountry(e.target.value)}
                                            /><br/><br/>

                                            <label for="pwd">University:</label>

                                            <input 
                                                type="text"
                                                id="text"
                                                name="University"
                                                value={university}
                                                onChange={(e)=>setUniversity(e.target.value)}
                                            /><br/><br/>
                                            
                                            <h2>Add Image:</h2>
                                            <input
                                                 type="file" 
                                                 onChange={(e) =>setImg(URL.createObjectURL(e.target.files[0]))}
                                                 /><br/><br/>

                                         <img src={img} />
 

                                            <input type="submit" value="Signup" /><br/><br/><br/><br/>
                                            <label for="text">Already a member? </label>
                                            <a href={""}>Log In </a><br/><br/>
                            
                        
                                    </form> 
                                    
                                </div>
                        </div>
                </div>
        }
</>
    );
   
}
export default Registration;