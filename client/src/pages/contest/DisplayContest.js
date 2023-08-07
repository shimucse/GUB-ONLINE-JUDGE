import React, { useEffect, useState } from "react";
import CountdownTimer from './CountdownTimer';
import { useLocation} from "react-router-dom";

const DisplayContest = ()=>{
  
  let location = useLocation();
  let day= location.state.daysRemaining;
  let contestdurationHour = location.state.contestdurationHour;
  let contestdurationMinutes = location.state.contestdurationMinutes;
  let contestName = location.state.name;
  console.log("day"+day);
  const [minute, setMinute] = useState(6);
  const [isRunning, setIsRunning] = useState(true);
  

 

  return (
      <>
       <div>
         <CountdownTimer day={day} contestdurationHour={contestdurationHour} contestdurationMinutes={contestdurationMinutes} contestName={contestName}/>  <div className="d-flex flex-column">
        
      </div>
       </div>      

  </>
    
  );
}
export default DisplayContest;