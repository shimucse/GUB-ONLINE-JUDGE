import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,  Route, Redirect,Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../pagesCss/ContestCreate.css'

import { useLocation} from "react-router-dom";
import CountdownTimer from './contestTimer/CountdownTimer';


const Home = ()=>{

      let navigate = useNavigate();
      const[token, setToken] = useState('');

      const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
       const NOW_IN_MS = new Date().getTime();

        const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    useEffect(
        ()=>{
              setToken(localStorage.getItem('token'));
            }
    ,[]);
    console.log("token:"+token);
  //  <CountdownTimer targetDate={dateTimeAfterThreeDays} />


  return (
      <>
               
      <div className="H_wrap">
          <div className="H_body_column">             
                 <button   className="ContestHistory">Contest history</button>
                 <button   className="ContestHistory">timer</button>
                 <CountdownTimer targetDate={dateTimeAfterThreeDays} />


         </div>
              

          

        </div>
  </>
    
  );
}
export default Home;