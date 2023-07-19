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
  const [userEmail, setUserEmail]= useState('');
  const [token, settoken]= useState('');
 var userEmail2 , token2;
 


  useEffect(() => {
    
    token2=(localStorage.getItem('token'));
    console.log("token2"+token2);
    if(token2){
      UserToken();
    }
    ProblemListCall();
   
   
  },[]); 
  const ProblemListCall = async()=>{
      const data =  Axios.get('http://localhost:5000/problemAdd/read').then((response)=>{
      setProblemList(response.data); 
      console.log(response.data);
      });
  }
  const UserToken =async()=>{

        const {data} = await Axios.get('http://localhost:5000/RegistraionAndLogin/viewProfile',{
          headers:{
              'x-access-token':localStorage.getItem('token'),
          }
      })

      console.log("data from profile:"+data);
      if(data.success === true){
           userEmail2=data.email;
           setUserEmail(data.email);
           console.log("userEmail2"+userEmail2);
        
  }else{
      alert(data.error);
  }
  }

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
                            <th><a>Acceptance</a></th>
                            <th><a>Problem Setter</a></th>
                        </tr>
                        {problemList.map((val, key) =>{
                            return (
                             

                              <tr>
                                  <td><a>{val.id}</a></td>
                                  <td>
                                    <button className="problemName" onClick={()=>HandleLoadProblemPage(val.id)}><a>{val.name}</a></button>
                                  </td>
                                  <td>
                                   
                                    {
                                    
                                      Array.isArray( val.acceptedList)
                                      ?val.acceptedList.map((value,key)=>{
                                       // return(<a> {typeof(userEmail)}-{typeof(value.userEmail)}</a>)
                                          if(userEmail === value.userEmail)
                                          {
                                            return(
                                              <a>Accepted</a>
                                              )
                                            
                                          }     
                                     
                                                                        
                                      }):<a>Accepted List Empty</a>
                                     
                                    }
                                    
                                   </td>
                                  <td><a>{val.acceptCounter}</a></td>
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