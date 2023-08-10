import React, { useEffect, useState } from "react";
import CountdownTimer from './CountdownTimer';
import ContestProblemList from './ContestProblemList'
import { useLocation} from "react-router-dom";
import Axios from 'axios';

const DisplayContest = ()=>{

  const [day, setDay]=useState(0);
  const [contestdurationHour, setcontestdurationHour]=useState(0);
  const [contestdurationMinutes, setcontestdurationMinutes]=useState(0);
  const [contestName, setcontestName]= useState("");
  const [problemIdList, setproblemIdList] = useState([]);



  const [contestDes, setContestDes] = useState('');

  
  let location = useLocation();
 
  useEffect(()=>{

      let id = location.state.name;
      let dbName = location.state.DBName;
      const data =  Axios.get(`http://localhost:5000/contestRawInput/fetch/${id}`).then((response)=>{
        setContestDes(response.data); 
            console.log( "displayed contest detailse:"+response.data);
      });
      Array.isArray(contestDes)
        ? contestDes.map((val, index)  => {
            return(
              setcontestName(val.name),
              setDay(val.daysRemaining),
              setcontestdurationHour(val.contestdurationHour),
              setcontestdurationMinutes(val.contestdurationMinutes),
              setproblemIdList(val.problemIdList)

            )
                    
            
        }
        ):console.log("problemDes is empty"+contestDes)
      
      
 },[]);

 

  return (
      <>
      <div className="wrap">
            <div className="body_column">

                  <div>
                    <CountdownTimer 
                            day={day}
                            contestdurationHour={contestdurationHour} 
                            contestdurationMinutes={contestdurationMinutes}
                            contestName={contestName}
                    />          
                    <div className="List_of_problem">
                          <ContestProblemList />         

                    </div>
                  </div>      

            </div>
       </div>
      
 

  </>
    
  );
}
export default DisplayContest;