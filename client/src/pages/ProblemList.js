import React , { useState,useEffect } from "react";
import Axios from 'axios';


const ProblemList = ()=>{
  const [problemList, setProblemList] = useState(['']);
  useEffect(() => {
    const data =  Axios.get('http://localhost:5000/problemAdd/read').then((response)=>{
    setProblemList(response.data);    
    console.log(response.data);
    });

   
  },[]);
  return (
    <div className="container">
     <h1> Problem List</h1>
     {problemList.map((val, key) =>{
        return <div><h1>{val.name}</h1></div>
     }
       
     )}
    </div>
  );
}
export default ProblemList;