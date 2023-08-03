import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import './css/ContestCreate.css'
import CountdownTimer from './CountdownTimer';

import DatePicker from 'react-datepicker';  
import addDays from 'date-fns/addDays'  
import "react-datepicker/dist/react-datepicker.css";  



const ContestCreate = ()=>{    

  const [startDate, setStartDate] = useState(new Date());  
  const [ RemainingDays, setRemainingDays] = useState(' ');

  let dateDifferent = ()=>{
     console.log("new Date "+new Date());
     console.log("new Date "+ startDate);
     const timeDifference = Math.abs(startDate-new Date());
     const daysRemaining =Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
     console.log("daysRemaining"+daysRemaining);
     setRemainingDays(daysRemaining);
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