import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,  Route, Redirect,Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../pagesCss/ContestCreate.css'

import { useLocation} from "react-router-dom";
import CountdownTimer from './contestTimer/CountdownTimer';


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
               
      <div className="H_wrap">
          <div className="H_body_column">          
                 <CountdownTimer />


         </div>
              

          

        </div>
  </>
    
  );
}
export default ContestCreate;