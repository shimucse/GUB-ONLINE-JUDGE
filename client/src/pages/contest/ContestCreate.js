import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,  Route, Redirect,Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './css/ContestCreate.css'

import { useLocation} from "react-router-dom";
import CountdownTimer from './CountdownTimer';
import './css/ContestCreate.css'

const ContestCreate = ()=>{

      let navigate = useNavigate();
      const[token, setToken] = useState('');

    
    useEffect(
        ()=>{
              setToken(localStorage.getItem('token'));
            }
    ,[]);
    console.log("token:"+token);


  return (
      <>
               
      <div className="wrap">
          <div className="body_column">   
               1.Contest start day
               2.contest duration
               4.Create new problem   
               5.problem List 
                    
               <p>hello from contest create </p>
               <CountdownTimer/>

         </div>
              

          

      </div>
  </>
    
  );
}
export default ContestCreate;