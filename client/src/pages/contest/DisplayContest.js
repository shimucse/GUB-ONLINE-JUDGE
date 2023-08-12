import React, { useEffect, useState } from "react";
import CountdownTimer from './CountdownTimer';
import ContestProblemList from './ContestProblemList'
import { useLocation} from "react-router-dom";
import Axios from 'axios';

const DisplayContest = (props)=>{

  const [day, setDay]=useState(0);
  const [contestdurationHour, setcontestdurationHour]=useState(0);
  const [contestdurationMinutes, setcontestdurationMinutes]=useState(0);
  const [contestName, setcontestName]= useState("");
  const [problemIdList, setproblemIdList] = useState([]);



  const [contestDes, setContestDes] = useState('');

  
  let location = useLocation();

  const callServer = async()=>{
    let id = location.state.name;

    const {data} = await Axios.get("http://localhost:5000/contestRawInput/contestDetailse",{
           headers:{
               'id':id
            } 
      }) 
   //   const data = await Axios.get("http://localhost:5000/contestRawInput/read");
   if(data.success === true){
    setDay(data.day);
    setcontestdurationHour(data.contestdurationHour);
    setcontestdurationMinutes(data.contestdurationMinutes);
    setcontestName(data.name);
    setproblemIdList(data.problemIdList);
   }

  }
 
  useEffect(()=>{

    callServer();
           
     
      
 },[]);

 

  return (
      <>
      <div className="wrap">
            <div className="body_column">
              <h1>problemDisplay</h1>
              <h1>day:{day}</h1>
              <h1>minute:{contestdurationMinutes}</h1>
  <h1>contestName:{contestName}</h1>

                <div>
                    <CountdownTimer 
                            day={day}
                            contestdurationHour={contestdurationHour} 
                            contestdurationMinutes={contestdurationMinutes}
                            contestName={contestName}
                    />          
                    
               </div>  

            </div>
       </div>
      
 

  </>
    
  );
}
export default DisplayContest;