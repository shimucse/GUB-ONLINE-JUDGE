import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,  Route, Redirect,Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './css/ContestCreate.css'
import { useLocation} from "react-router-dom";
import CountdownTimer from './CountdownTimer';
import './css/ContestCreate.css'
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  
import addDays from 'date-fns/addDays'  


const ContestCreate = ()=>{    

  const [startDate, setStartDate] = useState(new Date());  
  let dateDifferent = ()=>{
     console.log(new Date())
  }

  return (
      <>
               
      <div className="wrap">
          <div className="body_column">  


               <DatePicker 
                   selected={startDate}
                   onChange={(date) =>   
                   setStartDate(date)} 
                   minDate={new Date()}
                   maxDate={addDays(new Date(),15)}
                />   
                <br />
                <button onClick={dateDifferent}>different date</button>
                <br />      

               1.Contest start day<br />
                  .con<tb />vert day to hour minute second <br />
               2.contest duration<br />
               4.Create new problem   <br />
                   .problem point <br />
                   .Create new database for contest problem <br />
               5.problem List <br/>
                    
               <CountdownTimer/>

         </div>
              

          

      </div>
  </>
    
  );
}
export default ContestCreate;