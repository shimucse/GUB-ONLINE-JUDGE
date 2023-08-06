import React , { useState,useEffect } from "react";
import { useLocation} from "react-router-dom";
import '../pagesCss/ProblemDisplay.css'
import { useNavigate } from "react-router-dom";

import Axios from 'axios';


const ProblemDisplay = (props)=>{

  const [problemDes, setProblemDes] = useState('');
  let location = useLocation();

  let navigate = useNavigate();

  const token = localStorage.getItem('token');

   useEffect(()=>{

      let id = location.state.id
      const data =  Axios.get(`http://localhost:5000/problemAdd/fetch/${id}`).then((response)=>{
        setProblemDes(response.data); 
            console.log( "dilsplayed problem detailse:"+response.data);
      });
        
   },[]);
 

 
  

   

  return(
    

      <div className="wrap">
          <div class="body_column">

                {Array.isArray(problemDes)
                  ? problemDes.map((val, key)  => {
                      return(
                        <>
                                  
                        <div className="left_column">
                        
                          

                        <button className="problemSubmit_btn"onClick=
                        {()=>{ 
                            if(token)
                            {
                               navigate("/ProblemSubmit",
                              {state:{id:val.id, problemSetterAllInputOutputTestCase:val.problemSetterAllInputOutputTestCase}
                               });
                                
                             }
                             else{
                                window.alert("You have to login ");
                             }
                        }}>Solve Problem
                        </button>
                            <div className="problem_header">
                              <span className="problem_id">{val.id}.<span className ="problem_name">{val.name}</span></span>
                              
                              <span className="time_limit">time limit per test:  {val.timeLimit}s</span>
                              <span className="memory_limit">memory limit per test: {val.memoryLimit}</span>
                              

                            </div>

                            <div className="problem_description">
                              <p className="problem_description_middle">{val.description}</p>
                        
                            </div>

                            <div className="input_format">
                                <h3>Input</h3>
                                <span>{val.inputFormat}</span>
                            </div>
                            <div className="output_format">
                              <h3>Output</h3>
                              <span>{val.outputFormat}</span>
                            </div>
                        </div>

                        <div className="input_output_table">
                            <table>
                              <th>input</th>    
                              <th>output</th>

                                <tr>
                                                        
                                  </tr>
                                  <tr>
                                  <td>{val.firstSampleInput}</td>
                                  <td>{val.firstSampleOutput}</td> 
                                </tr>
                                  <tr>
                                    <td>{val.secondSampleInput} </td>
                                    <td>{val.secondSampleOutput}</td>
                                  </tr>                
                              
                            </table> 
                            <span className="setterName">Problem Set By:  {val.problemSetterName}</span>
                            <span className="problemAddDate">Date at :  {val.problemAddDate}</span>

                        </div>
                        
                        </>
                          );
                      })
                      : console.log("no data found;")}
          </div>
      </div>

  )
  
}
export default ProblemDisplay;