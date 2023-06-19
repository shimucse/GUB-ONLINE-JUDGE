import React , { useState,useEffect } from "react";
import Axios from 'axios';
import '../pagesCss/ProblemList.css'
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import { useNavigate } from "react-router-dom";




const ProblemList = ()=>{
   
  let navigate = useNavigate();

  const [problemList, setProblemList] = useState(['']);
  const [problemId, setProblemId] = useState('');
 


  useEffect(() => {
    const data =  Axios.get('http://localhost:5000/problemAdd/read').then((response)=>{
    setProblemList(response.data); 
    console.log(response.data);
    });

   
  },[]); 

  const HandleLoadProblemPage = (id)=>{
      setProblemId(id);
      navigate("/ProblemDisplay",{state:{id:id}});

    }
  return (
    <div className="container">
      

          <div className   ="wrap">
                <div className="body_column">
                
                  <h2 className="problem_archive">Problem  Archive</h2>

                  <table>
                        <tr>
                            <th><a>Id</a></th>
                            <th><a>Problem Name</a></th>
                            <th><a>Status</a></th>
                            <th><a>Acceptance/Submission</a></th>
                            <th><a>Problem Setter</a></th>
                        </tr>
                        {problemList.map((val, key) =>{
                            return (
                             

                              <tr>
                                  <td><a>{val.id}</a></td>
                                  <td>
                                    <button className="problemName" onClick={()=>HandleLoadProblemPage(val.id)}><a>{val.name}</a></button>
                                  </td>
                                  <td><a>&#10003;(do after login)</a></td>
                                  <td><a>8/12</a></td>
                                  <td><a>{val.problemSetterName}</a></td>
                             </tr>
                            )
                              }          
                        )}                   
                  </table>
                  <div className="next_previou_button">
                    <button href={"" }className="previous"><a>&laquo; Previous</a></button>
                    <button href={""} className="next"><a>Next &raquo;</a></button>
                </div>  
            </div>
          </div>
          <p>{problemId}</p>

        
    </div>
    
  );
}
export default ProblemList;