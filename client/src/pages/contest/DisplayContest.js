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

            <div class="card" style={{"width": "22rem", "marginLeft":'400px'}}>
              <img class="card-img-top" src={require("../../public/rsz_contest1.png")} alt="Card image cap"/>

              <div class="card-body">
                <h1 class="card-title">{contestName}September ICPC</h1>
                <p class="card-text">Remaining Time </p>
                <dl >
              <dt className="text-warning">Day:</dt>
              <dd className="text-success"> --{day} </dd>
              </dl>
              <dl >
              <dt className="text-warning">minute:</dt>
              <dd className="text-success">--{contestdurationMinutes} </dd>
              </dl>
              </div>
            </div>
              <h1 className="text-danger"></h1>

          
            

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