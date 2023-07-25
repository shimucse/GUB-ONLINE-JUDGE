import React from "react";
import '../pagesCss/Contest.css';
import { useNavigate } from "react-router-dom"; 


const Contest =()=>{
  let navigate = useNavigate();

    return(
        <>
        <div className="wrap">
            <div className="body_column">
              <div className="ManueOfContest">
              <button onClick={()=>{navigate("/ContestCreate")}}>Create a Contest</button>
              
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
                                 <td>Gub Round #813 (Div 2)</td>
                                 <td><a href={""}>Igorfardoc Vladithur</a> </td>
                                 <td>Aug/13/2022</td>
                                 <td>2:15</td>
                                 <td>Before start <span>2days</span> </td>
                                 <td>Before Registration <span>9:00 hour</span> </td>
 
                             </tr>
                             <tr>
                               <td>Gub Round  (Div 2)</td>
                               <td><a href={""}>Ragia Akter</a> </td>
                               <td>Aug/20/2022</td>
                               <td>2:00</td>
                               <td>Before start <span>9 days</span> </td>
                               <td>Before Registration <span>7 days</span> </td>
 
                           </tr>
                           <tr>
                             <td>Gub Round  (Div 2)</td>
                             <td><a href={""}>FairyWinx</a> </td>
                             <td>Sep/02/2022</td>
                             <td>2:00</td>
                             <td>Before start <span>3 weeks</span> </td>
                             <td>Before Registration <span>3 2 weeks</span> </td>
 
                         </tr>
                           
                               
                       </table>
                       <table className="notice_table">
                         <tr><th className="pay_attention">Pay attention</th></tr>
                         <tr><td>
                           <span>before contest</span> 
                           <a href={""}>GUB Div 2</a>
 
                         </td></tr>
                       </table>
                 </div>
                 <table className="old_contest">
                   <tr><th  className="old_contest_name" colspan="6">Past contests</th></tr>
                   <tr>
                       <th>Name</th>
                       <th>Writers</th>
                       <th>Start</th>
                       <th>Length</th>
                       <th></th> 
                       <th></th>
 
                   </tr>
                   <tr>
                       <td>Gub Round #813 (Div 2)</td>
                       <td><a href={""}>Igorfardoc Vladithur</a> </td>
                       <td>Aug/13/2022</td>
                       <td>2:15</td>
                       <td>Before start <span>2days</span> </td>
                       <td>Before Registration <span>9:00 hour</span> </td>
 
                   </tr>
                   <tr>
                     <td>Gub Round  (Div 2)</td>
                     <td><a href={""}>Ragia Akter</a> </td>
                     <td>Aug/20/2022</td>
                     <td>2:00</td>
                     <td>Before start <span>9 days</span> </td>
                     <td>Before Registration <span>7 days</span> </td>
 
                 </tr>
                 <tr>
                   <td>Gub Round  (Div 2)</td>
                   <td><a href={""}>FairyWinx</a> </td>
                   <td>Sep/02/2022</td>
                   <td>2:00</td>
                   <td>Before start <span>3 weeks</span> </td>
                   <td>Before Registration <span>3 2 weeks</span> </td>
 
               </tr>
               <tr>
                 <td>Gub Round  (Div 2)</td>
                 <td><a href={""}>FairyWinx</a> </td>
                 <td>Sep/02/2022</td>
                 <td>2:00</td>
                 <td>Before start <span>3 weeks</span> </td>
                 <td>Before Registration <span>3 2 weeks</span> </td>
 
             </tr>
             <tr>
               <td>Gub Round  (Div 2)</td>
               <td><a href={""}>FairyWinx</a> </td>
               <td>Sep/02/2022</td>
               <td>2:00</td>
               <td>Before start <span>3 weeks</span> </td>
               <td>Before Registration <span>3 2 weeks</span> </td>
 
           </tr>
           <tr>
             <td>Gub Round  (Div 2)</td>
             <td><a href={""}>FairyWinx</a> </td>
             <td>Sep/02/2022</td>
             <td>2:00</td>
             <td>Before start <span>3 weeks</span> </td>
             <td>Before Registration <span>3 2 weeks</span> </td>
 
         </tr>
         <tr>
           <td>Gub Round  (Div 2)</td>
           <td><a href={""}>FairyWinx</a> </td>
           <td>Sep/02/2022</td>
           <td>2:00</td>
           <td>Before start <span>3 weeks</span> </td>
           <td>Before Registration <span>3 2 weeks</span> </td>
 
       </tr>
                  
                      
             </table>
                 
           </div>
 
 
        </div>
        </>
    );
}
export default Contest;