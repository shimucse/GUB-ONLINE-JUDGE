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
  const [active, setActive] = useState('');



  useEffect(() => {
    const data =  Axios.get('http://localhost:5000/problemAdd/read').then((response)=>{
    setProblemList(response.data); 
    console.log(response.data);
    });

   
  },[]); 

  const HandleLoadProblemPage = (id)=>{
      console.log("problem id"+ id);
      setProblemId(id);
      navigate("/ProblemSubmit");
     
     // setActive('activeName');   

  }
  return (
    <div className="container">
      

          <div className   ="wrap">
                <div className="body_column">
                
                  <h2 className="problem_archive">Problem  Archive</h2>

                  <table>
                        <tr>
                            <th>Id</th>
                            <th>Problem Name</th>
                            <th>Status</th>
                            <th>Acceptance/Submission</th>
                            <th>Problem Setter</th>
                        </tr>
                        {problemList.map((val, key) =>{
                            
                            return (
                              <tr>
                                  <td>{val.id}</td>
                                  <td>
                                    <button className="problemName" onClick={()=>HandleLoadProblemPage(val.id)}>{val.name}</button>
                                  </td>
                                  <td>&#10003;(do after login)</td>
                                  <td>8/12</td>
                                  <td>{val.problemSetterName}</td>
                             </tr>
                            )
                              }          
                        )}                   
                  </table>
                  <div className="next_previou_button">
                    <button href={"" }className="previous">&laquo; Previous</button>
                    <button href={""} className="next">Next &raquo;</button>
                </div>  
            </div>
          </div>
          <p>{problemId}</p>

        {/*  <div>{active === 'activeName' && <CodeSubmit/>}</div>
         
           <BrowserRouter>
        
       <Routes>       
        <Route exact path="ProblemSubmit" element={<ProblemSubmit/>}/>
        </Routes>
                            </BrowserRouter>*/}
    </div>
    
  );
}
export default ProblemList;