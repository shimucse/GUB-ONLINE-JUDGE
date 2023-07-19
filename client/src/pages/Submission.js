import {React,useEffect,useState} from "react";
import '../pagesCss/Submission.css';
import { useLocation} from "react-router-dom";



const AllSubmissionDisplay = ()=>{
  const[problemSolvedList, setproblemSolvedList]=useState([]);
  let location = useLocation();

  useEffect(()=>{

    
    setproblemSolvedList(location.state.problemSolvedList);
   console.log("problemSolvedList:  "+location.state.problemSolvedList);
 
},[]);


    return(

            <>
               <div className="wrap">
               <div class="body_column">
              
                <h2 class="all_submission">All Submission</h2>


                <table>
                      <tr>
                          <th>Id</th>                         
                          <th>Problem Name</th>
                          <th>Verdict</th>
                          <th>CPU TIME</th>
                          <th>Job Memory </th>
                          
                      </tr>
                     
                        {
                           Array.isArray(problemSolvedList)
                            ?problemSolvedList.map((val, key)=>{
                              return(
                                <tr>
                                    <td>{val.problemId}</td>
                                    <td><a href="">{val.problemName}</a> </td>
                                    <td class="verdict">Accepted</td>
                                    <td>{val.cpuTime}</td>
                                    <td>{val.jobMemory}</td>

                                 </tr>
                              )
                           }):<a>problemSolvedList Empty</a>
                        }
                          
                         
                    
                      
                </table>
                <div class="next_previou_button">
                <a href="#" class="previous">&laquo; Previous</a>
                <a href="#" class="next">Next &raquo;</a>
              </div>  
          </div>



                </div>  
            </>
     );
};
export default AllSubmissionDisplay;