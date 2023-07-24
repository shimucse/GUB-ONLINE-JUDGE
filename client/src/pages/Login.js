import React , { useState,useEffect } from "react";
import '../pagesCss/Login.css'
import Axios from 'axios';

const Login = ()=>{
    const[email, setEmail] = useState('');

    const[password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [isActiveUser, setIsActiveUser] = useState(Boolean);
    const [token, setToken] = useState('');  
     

     

        useEffect(()=>{
          setToken(localStorage.getItem('token')) ;
            console.log("token form registration:"+token);
    },[]

    );


     //setLoginuser(true);
       const loginUser = async(e)=>{
        
                    e.preventDefault();

                   
                       
                        try{

                                    const  payload = {                    
                                        email:email,
                                        password:password,
                                    
                                    };
                                
                                    const {data} = await Axios.post("http://localhost:5000/RegistraionAndLogin/login", payload);
                                    // const {data} = await Axios.delete("http://localhost:5000/RegistraionAndLogin/delete");
                                    //  const data = await Axios.get("http://localhost:5000/RegistraionAndLogin/read");
                                    // const dataExtract = await data.json();
                                    console.log(data.user);
                                    if(data.user){
                                        localStorage.setItem('token', data.user);
                                       // window.confirm('login sucessfull');
                                        window.location.href='/UserProfile';

                                    }else{
                                        alert('Please check your username password');
                                    }

                            
                        }
                        catch({response}){
                                if(response){
                                    const errMsg = response.data.err;
                                    window.confirm('Please check your username password');

                            }else{
                                console.log("Error connecting to server!");
                            }
                        }   
                    
                  
                   

    }     
    //if there's no user, show the login form
    return(
        <>     

                {token ?<h1>You are Already loged in</h1>
                :
                <div className="wrap">
                    <div className="body_column">
                        
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
                    </div>
                </div>
                }
                
        </>
    );
}
export default Login;