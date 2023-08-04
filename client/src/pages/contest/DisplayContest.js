import React, { useEffect, useState } from "react";
import CountdownTimer from './CountdownTimer';
import { useLocation} from "react-router-dom";

const DisplayContest = ()=>{
  
  let location = useLocation();
  let day= location.state.daysRemaining;
  console.log("day"+day);
  const [minute, setMinute] = useState(6);
  const [isRunning, setIsRunning] = useState(true);

 

  return (
      <>
       <div>
         <h1>From DisplayContest page </h1>
         <CountdownTimer day={day}/>  <div className="d-flex flex-column">
        
      </div>
       </div>      

  </>
    
  );
}
export default DisplayContest;