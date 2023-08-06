import React, { useEffect, useState } from "react";
import CountdownTimer from './CountdownTimer';
import { useLocation} from "react-router-dom";

const DisplayContest = ()=>{
  
  let location = useLocation();
  let day= location.state.daysRemaining;
  let contestdurationHour = location.state.contestdurationHour;
  let contestdurationMinutes = location.state.contestdurationMinutes;
  console.log("day"+day);
  const [minute, setMinute] = useState(6);
  const [isRunning, setIsRunning] = useState(true);

 

  return (
      <>
       <div>
         <h1>From DisplayContest page </h1>
         <CountdownTimer day={day} contestdurationHour={contestdurationHour} contestdurationMinutes={contestdurationMinutes}/>  <div className="d-flex flex-column">
        
      </div>
       </div>      

  </>
    
  );
}
export default DisplayContest;