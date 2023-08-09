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
  const [problemId, setProblemId]= useState("");
  const [problemIdList, setProblemIdList] = useState([]);

  let navigate = useNavigate();


  let addProblemId = ()=>{
    setProblemIdList([...problemIdList, problemId]);
    alert("added problemId to your contest problem list");
  }


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
                <input type="text" value={name} placeholder="unique" onChange={(e)=>setName(e.target.value)}></input><br />

                
                 <label>Problem Id</label>
                 <input type="text" value={problemId} placeholder="unique" onChange={(e)=>setProblemId(e.target.value)}></input><br />
                 {                 

                      problemIdList.map(function(item, i){
                        return <span key={i}>{item}</span>
                      })
                 }      
                
                <button onClick={()=>(navigate("/NewProblem",{state:{problemId:problemId}}))}>Create New Problem</button>
               
                <br />
                <button onClick={addProblemId}>add problem Id </button>
                <br />
                

                <button onClick={dateDifferent}>Submit</button> <br /><br />      

                  
                  6.Save everyThing to Database
                                       
             

         </div>       

      </div>
  </>
    
  );
}
export default ContestCreate;