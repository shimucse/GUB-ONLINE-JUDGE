import React , { useState,useEffect } from "react";
import '../pagesCss/Login.css'
import Axios from 'axios';

const Login = ()=>{
    const[email, setEmail] = useState('');

    const[password, setPassword] = useState('');

    const loginUser = async(e)=>{
        e.preventDefault();

        console.log("loginUserfunc");
             try{

                 const  payload = {                    
                    email:email,
                    password:password,
                  
                  };
          
              const {data} = await Axios.post("http://localhost:5000/RegistraionAndLogin/login", payload);
             // const {data} = await Axios.delete("http://localhost:5000/RegistraionAndLogin/delete");
             //  const data = await Axios.get("http://localhost:5000/RegistraionAndLogin/read");
             window.confirm('login sucessfull');

              
        }
        catch({response}){
              if(response){
                 const errMsg = response.data.err;
                 window.confirm('Wrong email or password');

           }else{
              console.log("Error connecting to server!");
           }
        }
       
        
        }

    return(
        <>
           <h1>Login Form</h1>
           <div className="login_form">
               <span className="login_page_header">Login into GUB Online Judge</span>
               <form onSubmit={loginUser} >
                        <label for="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            
                        />
                        <br/><br/>
                        <label for="pwd">Password:</label>
                        <input
                             type="password" 
                             id="pwd" name="pwd"
                             minlength="7"
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)}
                        />
                        <br/><br/>
                        <input 
                            type="submit"
                             value="Login"
                        />
                            <br/><br/><br/><br/>
                                      
                    
                </form> 
            </div>
        </>
    );
}
export default Login;