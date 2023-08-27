import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import './css/ContestCreate.css'

import DatePicker from 'react-datepicker';  
import addDays from 'date-fns/addDays'  
import "react-datepicker/dist/react-datepicker.css";  
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


const ContestCreate = ()=>{    
  
  
  const [startDate, setStartDate] = useState(new Date());  
  const [day, setDay] = useState(0);

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

     navigate("/DisplayContest",{state:{name:name}});
     
  }

  const addButtonHandler = async()=>{
    
     /*     if(day.trim().length !== 0 && contestdurationHour.trim().length!==0 && contestdurationMinutes.trim().length!==0 
          && name.trim().length!==0 && problemIdList.trim().length!==0)
          {*/

          console.log("new Date "+new Date());
         console.log("new Date "+ startDate);
         const timeDifference = Math.abs(startDate-new Date());
         let daysRemaining =(timeDifference / (1000 * 60 * 60 * 24));
         console.log('daysRemaining'+daysRemaining);
         setDay(daysRemaining);        

              console.log("day inside addButton : "+day);
              console.log(contestdurationHour);
              console.log(contestdurationMinutes);
              console.log(name);
              console.log(problemIdList);       
                
              const problemDetailse = {
                  day: daysRemaining,
                  contestdurationHour:contestdurationHour,
                  contestdurationMinutes:contestdurationMinutes,
                  name:name,
                  problemIdList:problemIdList,

              }
                try{
                      const {data} = await Axios.post('http://localhost:5000/contestRawInput/submit', problemDetailse);
                     // const data = await Axios.delete('http://localhost:5000/contestRawInput/delete');
                      console.log("data from problem add"+data);
                      window.confirm(' contestCreatedSuccessfully');

                }
                catch(errMsg){
                  // window.confirm(' Error : id should be unique');
                  window.confirm("error : "+errMsg);
                }
         /* }
          else{
            window.confirm("WARNING:Fill the  all field 'must include' ");
          }*/

}
    return (
      <>
               
      {/*<div classNameName="wrap">
          <div classNameName="body_column">  
            <div classNameName="myContainter">
               <label classNameName="dateTimeSelector">Select Date and Time </label>
                <DatePicker  

                     classNameName="myDatePicker"
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
                
                <button onClick={addButtonHandler}>saveToDB</button> <br /><br />      

                <button onClick={dateDifferent}>Submit</button> <br /><br />      

                  
                 
                                       
             

         </div>       

                </div>*/}
<html>
<head>
  <title>Create a new contest </title>
 
  
</head>
<body>
  <main className="page payment-page">
    <section className="payment-form dark">
      <div className="container">
        <div className="block-heading">
          <h2>Create New Contest</h2>
          <p>For making a new contest, you have to add few problems, have to fix a  date and also have to set duration </p>
        </div>
        <form>
          <div className="products">
            <h3 className="title">Checkout</h3>
            <div className="item">         
               <div classNameName="myContainter">


              <p className="item-name"><label classNameName="dateTimeSelector">Select Date and Time </label>
                <DatePicker  

                     classNameName="myDatePicker"
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
               />  </p>
               </div>
            </div>
            <div className="item">
            </div>
          </div>
          <div className="card-details">
            <h3 className="title">Give the time duration of contest:</h3>
            <div className="row">
              <div className="form-group col-sm-7">
                <label for="card-holder">Hour :</label>
                <input id="card-holder" type="text" className="form-control" placeholder="Hour Holder" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <div className="form-group col-sm-5">
                <label for="">Minute :</label>
                <div className="input-group expiration-date">
                  <input type="text" className="form-control" placeholder="Minute Holder" aria-label="MM" aria-describedby="basic-addon1"/>
                  <span className="date-separator">Contest Name</span>
                  <input type="text" className="form-control" placeholder="Name Holder" aria-label="YY" aria-describedby="basic-addon1"/>
                </div>
              </div>
              <div className="form-group col-sm-8">
                <label for="card-number">Problem Id : </label>
                <input id="card-number" type="text" className="form-control" placeholder="Problem Id Holder" aria-label="Card Holder" aria-describedby="basic-addon1"/>
              </div>
              <input type="text" value={problemId} placeholder="unique" onChange={(e)=>setProblemId(e.target.value)}></input><br />
                 {                 

                      problemIdList.map(function(item, i){
                        return <span key={i}>{item}</span>
                      })
                 }      
                
                <button className="btn btn-outline-success" onClick={()=>(navigate("/NewProblem",{state:{problemId:problemId}}))}>Create New Problem</button>
               
                <br />
                <button className = "btn btn-outline-danger" onClick={addProblemId}>add problem Id </button>
                <br />
                
                <button  className = "btn btn-outline-warning" onClick={addButtonHandler}>saveToDB</button> <br /><br />      
                <div className="form-group col-sm-12">

                <button className="btn btn-dark" onClick={dateDifferent}>Show contest</button> <br /><br /> 
                </div>
             
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
</body>

</html>

  </>
    
  );
}
export default ContestCreate;