import React , { useState } from "react";
import { useLocation} from "react-router-dom";



import { redirect } from "react-router-dom";

const ProblemDisplay = (props)=>{
  const location = useLocation();
  console.log("id:  "+location.state.id);
  return(
    <div>
      <h1>Problem Display Page</h1>
    </div>
  )
  
}
export default ProblemDisplay;