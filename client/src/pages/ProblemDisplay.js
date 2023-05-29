import React , { useState,useEffect } from "react";
import { useLocation} from "react-router-dom";
import '../pagesCss/ProblemDisplay.css'

import Axios from 'axios';


const ProblemDisplay = (props)=>{

  const [problemDes, setProblemDes] = useState('');
  let location = useLocation();


  
 
   useEffect(()=>{

      let id = location.state.id
      const data =  Axios.get(`http://localhost:5000/problemAdd/fetch/${id}`).then((response)=>{
        setProblemDes(response.data); 
            console.log(response.data);
      });
        
   },[]);
 

 
    /*const data =  Axios.get('http://localhost:5000/problemAdd/readId',{
      params: {
        ID: 12345
      }
    }
    ).then((response)=>{
      setProblemDes(response.data); 
          console.log("response data"+response.data);
    });*/

   

  return(
    <div>
      <p>id:{problemDes.name}</p>

      <div className="wrap">

              <div className="left_column">

                  <div className="problem_header">
                     <span className="problem_id">300. <span className ="problem_name">Bags with Balls </span></span>
                     
                     <span className="time_limit">time limit per test:  3 seconds</span>
                     <span className="memory_limit">memory limit per test: 512 megabytes</span>
                    

                  </div>

                  <div className="problem_description">
                    <p className="problem_description_top">There are n bags, each bag contains m balls with numbers from 1 to m. For every i∈[1,m], there is exactly one ball with number i in each bag.</p>
                    <p className="problem_description_middle">You have to take exactly one ball from each bag (all bags are different, so, for example, taking the ball 1 from the first bag and the ball 2 from the second bag is not the same as taking the ball 2 from the first bag and the ball 1 from the second bag). After that, you calculate the number of balls with odd numbers among the ones you have taken. Let the number of these balls be F.

                    </p>
                    <p className="problem_description_bottom">Your task is to calculate the sum of Fk over all possible ways to take n balls, one from each bag</p>
              
                  </div>

                   <div className="input_format">
                      <h3>Input</h3>
                      <span>The first line contains one integer t (1≤t≤5000) — the number of test cases.

                        Each test case consists of one line containing three integers n, m and k (1≤n,m≤998244352; 1≤k≤2000).</span>
                   </div>
                   <div className="output_format">
                    <h3>Output</h3>
                    <span>For each test case, print one integer — the sum of Fk over all possible ways to take n balls, one from each bag. Since it can be huge, print it modulo 998244353.</span>
                   </div>
              </div>

              <div className="input_output_table">
                  <table>
                    <th>input</th>    
                     <th>output</th>

                      <tr>
                                               
                        </tr>
                        <tr>
                        <td>2 3 8</td>
                        <td>1028</td> 
                      </tr>
                        <tr>
                          <td>1 1 1 </td>
                          <td>1</td>
                        </tr>                
                    
                  </table>  
              </div>
          </div>





     </div>

  )
  
}
export default ProblemDisplay;