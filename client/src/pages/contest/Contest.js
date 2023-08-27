import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './css/Contest.css'
import Axios from 'axios';

const Contest =()=>{

  const [currentContestList, setCurrentContestList]=useState(['']);


  let listOfCurrentContest= async()=>{
      let data = await Axios.get("http://localhost:5000/contestRawInput/read").then((response)=>{
        setCurrentContestList(response.data); 
        console.log("contest list"+response.data);
        });

       
    }
    Array.isArray(currentContestList)
            ? currentContestList.map((obj, key)  => {
                console.log("name:"+obj.name);
                console.log("day:"+obj.day);

            }):console.log("problemSetterInputOutput is empty") 
  
  let navigate = useNavigate();
  useEffect(
     ()=>{

      listOfCurrentContest();

     },[]);

    return(
        <>
        <div className="wrap">
            <div className="body_column">
              <div className="ManueOfContest">
               <button className="btn btn-outline-warning" onClick={()=>{navigate("/ContestCreate")}}>Create a Contest</button>
              
              </div>
              
              <div className="recent_notice_table" >
                       <table className="recent_contest">
                             <tr><th  className="recent_contest_name" colspan="6">Current or upcoming contests</th></tr>
                             <tr>
                                 <th>Name</th>
                                 <th>Writers</th>
                                 <th>Start</th>
                                 <th>Length</th>
                                 <th></th> 
                                 <th></th>
 
                             </tr>
                             <tr>
                       <td>September contest (Div 1)</td>
                       <td><a href={""}>Rabia Akter</a> </td>
                       <td>08/09/2023</td>
                       <td>10:15</td>
                       <td>Before start <span>11 days</span> </td>
                       <td>Before Registration <span>11 days & 9:00 hour</span> </td>
 
                   </tr>
                           
                         {/*
                            Array.isArray(currentContestList)
                            ? currentContestList.map((obj, index)  => {
                              return (
                               
                                   <tr key={index}>
                                      <td>
                                        <button onClick={()=>(navigate("/DisplayContest",{state:{name:obj.name}}))}>{obj.name}</button>
                                      </td>
                                   </tr>
                                  
                              )
                
                            }):console.log("problemSetterInputOutput is empty") 
                          */}    
                       
                               
                      </table>
                       {/* <table className="notice_table">
                         <tr><th className="pay_attention">Pay attention</th></tr>
                         <tr><td>
                           <span>before contest</span> 
                           <a href={""}>GUB Div 2</a>
 
                         </td></tr>
                        </table>*/}
                 </div>
                 <table className="old_contest">
                   <tr><th  className="old_contest_name" colspan="6">Past contests</th></tr>
                   <tr>
                       <th>Name</th>
                       <th>Writers</th>
                       <th>Start</th>
                       <th>Length</th>
                       
                   </tr>
                   <tr>
                       <td>Gub Round #813 (Div 2)</td>
                       <td><a href={""}>Fairooz Nawer</a> </td>
                       <td>Aug/13/2022</td>
                       <td>2:15</td>
                     
 
                   </tr>
                   <tr>
                     <td>Gub Round  (Div 2)</td>
                     <td><a href={""}>Ragia Akter</a> </td>
                     <td>Aug/20/2022</td>
                     <td>2:00</td>
                     
 
                 </tr>
                 <tr>
                   <td>Gub Round  (Div 2)</td>
                   <td><a href={""}>Supti </a> </td>
                   <td>Sep/02/2022</td>
                   <td>3:00</td>
                  
 
               </tr>
               <tr>
                 <td>Gub Round  (Div 2)</td>
                 <td><a href={""}>Namee</a> </td>
                 <td>Oct/02/2022</td>
                 <td>2:00</td>
                 
 
             </tr>
             <tr>
               <td>Gub Round  (Div 2)</td>
               <td><a href={""}>Rijwan</a> </td>
               <td>Nov/02/2022</td>
               <td>2:00</td>
               
 
           </tr>
           <tr>
             <td>Gub Round  (Div 2)</td>
             <td><a href={""}>Saju</a> </td>
             <td>Sep/02/2022</td>
             <td>3:00</td>
           
 
         </tr>
         <tr>
           <td>Gub Round  (Div 2)</td>
           <td><a href={""}>Khaled</a> </td>
           <td>Sep/02/2022</td>
           <td>4:00</td>
           
 
       </tr>
                  
                      
             </table>
                 
           </div>
 
 
        </div>
        </>
    );
}
export default Contest;