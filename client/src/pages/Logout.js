import React,{useEffect, useState} from "react";
import jwtDecode from 'jwt-decode'
//import{useHistory} from 'react-router-dom';
import { useLocation} from "react-router-dom";
import Axios from 'axios';


const Logout = ()=>{
    const history = useLocation();

  
    useEffect(()=>{

        const token = localStorage.getItem('token');
        if(token){
             
               // populateQuote();
                //localStorage.setItem('token', 'null');
                localStorage.removeItem('token');
               //  alert("you are successfully logeout")
          
        }
        else{
          //  alert("You are not loged in")
            window.location.href='/Login';

           
        }

    },[""])
    return ;
}
export default Logout;