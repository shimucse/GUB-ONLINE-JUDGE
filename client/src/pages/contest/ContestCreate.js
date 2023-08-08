import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import './css/ContestCreate.css'

import DatePicker from 'react-datepicker';  
import addDays from 'date-fns/addDays'  
import "react-datepicker/dist/react-datepicker.css";  
import { useNavigate } from "react-router-dom";


const ContestCreate = ()=>{    
  
  
  const [startDate, setStartDate] = useState(new Date());  
  const [ RemainingDays, setRemainingDays] = useState(' ');

  const [contestdurationHour, setContestdurationHour] = useState(0);
  const [contestdurationMinutes, setContestdurationMinutes] = useState(0);
  const [name, setName] = useState("");


  let navigate = useNavigate();


  let dateDifferent = ()=>{

         console.log("new Date "+new Date());
         console.log("new Date "+ startDate);
         const timeDifference = Math.abs(startDate-new Date());
         let daysRemaining =(timeDifference / (1000 * 60 * 60 * 24));
         console.log("daysRemaining"+daysRemaining);
         setRemainingDays(daysRemaining);        

         console.log("Hour :",contestdurationHour+"Minutes : ",contestdurationMinutes);
        

         navigate("/DisplayContest",{state:{daysRemaining:daysRemaining, contestdurationHour:contestdurationHour, contestdurationMinutes:contestdurationMinutes,name:name}});
     
  }
    return (
      <>
               
      <div className="wrap">
          <div className="body_column">  
            <div className="myContainter">
               <label className="dateTimeSelector">Select Date and Time </label>
                <DatePicker  

                     className="myDatePicker"
                     selected={ startDate}  
                     onChange={(date) =>   
                     setStartDate(date)} 
                     showTimeSelect  
                     timeFormat="HH:mm"  
                     timeIntervals={20}  
                     timeCaption="time"  
                     dateFormat="MMMM d, yyyy h:mm aa"  
                     minDate={new Date()}  
                     maxDate={addDays(new Date(), 7)}  
               />  
                </div> 
  
                <br />
                <label>Give the time duration of contest </label><br />

                <label>Hour : </label>
                <input type="number" value={contestdurationHour} onChange={(e)=>setContestdurationHour(e.target.value)}></input><br />
                <label>Minute : </label>
                <input type="number" value={contestdurationMinutes} onChange={(e)=>setContestdurationMinutes(e.target.value)}></input><br />
                
                <label>Contest Name </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br />

                <button onClick={dateDifferent}>Submit</button> <br /><be />

                <button onClick={()=>(navigate("/NewProblem"))}>Create New Problem</button>

                <br />      

                  
                  4.Create new problem   <br />
                     .problem point <br />
                     .Create new database for contest problem <br />
                  5.problem List <br/> 
                  6.Save everyThing to db;                  
             

         </div>       

      </div>
  </>
    
  );
}
export default ContestCreate;