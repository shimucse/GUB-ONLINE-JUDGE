import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import axios from 'axios';
import stubs from '../defaultStubs';
import moment from 'moment';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/dracula.css';

import "codemirror/theme/idea.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

import { useNavigate } from "react-router-dom";

import { useLocation} from "react-router-dom";

import "../pagesCss/codeSubmit.css";
import Update_user_problem_DB_after_accepted from './Update_user_problem_DB_after_accepted'

const ProblemSubmit =  (props)=>{

    const[code,setCode] = useState('');
    const[output, setOutput] = useState('');
    const [language,setlanguage] = useState("cpp");
    const [status, setStatus] = useState("");
    const [jobId, setJobId] = useState("");
    const [jobMemory, setJobMemory]= useState('');
    const [jobDetails,setJobDetails ] = useState(null);
    const [customInput, setCustomInput] = useState([]);
    const [customInputFirst, setCustomInputFirst ] = useState([]);
    const [problemId, setProblemId] = useState('');
    const [problemStterInputOutput, setProblemStterInputOutput] = useState([]);
    //const [renderTime, setRenderTime]=useState('');
    let renderTime;

    //prbolem db
    const [whoSolved, setwhoSolved]=useState([]);
    const [acceptCounterForProblem, setacceptCounterForProblem]=useState(0);

    //User
    const[problemName, setproblemName]=useState("");
    const [userEmail, setuserEmail]=useState('');
    const [AcceptedCounterUsers,setAcceptedCounterUsers]=useState(0);
    const [problemDes, setProblemDes] = useState([]);
    const [useridExistInProblemDB, setuseridExistInProblemDB] = useState(false);
    const [userProblemSolveList, setuserProblemSolveList]=useState([]);



    //user acceptence 
  
    let location = useLocation();

  
   useEffect(()=> {     
      setCode(stubs[language]);
   },[language]);
  
  
  
  
   const renderTimeDetailse = ()=>{
      if(!jobDetails){
         return " ";
      }
      
      let result = '';
      let {submittedAt, completedAt, startedAt} = jobDetails;
      submittedAt = moment(submittedAt).toString();
      result += `submitted At: ${submittedAt}`;
      if(!completedAt || !startedAt){
         return result;
      }
      const start = moment(startedAt);
      const  end = moment(completedAt);
      const executionTime = end.diff(start,'second',true);
      result = `execution Time : ${executionTime}s`;
      renderTime = executionTime;
      return result;
   }
  
   useEffect(()=> {
      let id = location.state.id
      let SetterInputOutputLocation = location.state.problemSetterAllInputOutputTestCase;
      setProblemStterInputOutput(SetterInputOutputLocation);
      problemDesAxios(id);
 
      handleViewProfile();

      setProblemId(id);
    
      let inputTrim = (customInputFirst);      
      setCustomInput(inputTrim);
    // let inputSplice= (inputTrim.split(/\n/)) 
        

     
   
     
  },[customInputFirst]);
  


    const handleSubmit = async(SubmitType) =>{
                 
                 
             
                console.log("callType 1:"+SubmitType);

                 let deleteId;
                 let payload ={};

                 if(SubmitType==='submit'){
                        payload = {
                           language : language,
                           code:code ,
                           SubmitType:SubmitType,
                           problemSetterAllInputOutputTestCase:problemStterInputOutput,
                           problemId:problemId,
                        
                        };

                 }else{
                     payload = {
                        language : language,
                        code:code ,
                        SubmitType:SubmitType,
                        input:customInput,
                        problemId:problemId,
                     
                  };

                 }
                   
                
                 try{
                       setJobId("");
                       setStatus("");
                       setOutput("");
                       setJobMemory("");
                       setJobDetails(null);
  
                     /********call for problem detailse */
                      // problemDesAxios();

                       const {data} = await Axios.post("http://localhost:5000/codeSubmit/submit", payload)
                       setJobId(data.jobId);
                       let intervalId;
  
                       

                       
                       intervalId = setInterval(async()=>{
  
                             const{data:dataRes} = await Axios.get('http://localhost:5000/codeSubmit/status', {params: {id:data.jobId}});
                             deleteId=data.jobId;
                             const {success, job, error} = dataRes;

                             
                                
                             if(success)
                             {
                                 
                                // const {status: jobStatus, output: jobOutput,  jobMemory:memorySpace} = job;
                                const jobStatus = job.status;
                                const jobOutput = job.output;
                                const memory = job.memorySpace;
                                console.log("jobOutput"+jobOutput);
                                setStatus(jobStatus);
                                setJobDetails(job);
  
                                setOutput(jobOutput);
                                setJobMemory(memory);
                                clearInterval(intervalId);
                                
                                /**************Update Accepted/Attempted in userDB and problemDb*************** */
                              if(jobOutput==='Accepted'){
                                    console.log("we will work ");
                                    handleBD_after_accepted(memory);                            

                                } 
                                else{
                                  console.log("wrong answer we wont work");
                                }
                                 
                                if(SubmitType === 'run'){                                
  
                                   console.log("run will call the delete method"+ deleteId);
                                   await axios.delete('http://localhost:5000/codeSubmit/delete', {params: {id:data.jobId}});
                                   clearInterval(intervalId); 
                 
                               }
  
                                if(jobStatus === "pending")  return ;                        
  
                             }else{
                                    

                                       setStatus("Error : Please retry !");
                                       console.error(error);
                                       clearInterval(intervalId);
                                       setOutput(error);
                             }
                       },1000);
  
                      
                 }
                 catch({response}){
                       if(response){
                          const errMsg = response.data.err.stderr;
                          setOutput(errMsg);
                    }else{
                       setOutput("Error connecting to server!");
                    }
                 }
                
              
  }
 
  const handleBD_after_accepted = async(memory)=>{
          //user Email
          handleViewProfile();
          problemDesAxios(problemId);
          let userInProblem = 0;
          if(userEmail){

                userInProblem = 0
                 console.log("userEmail:"+userEmail);
              // console.log("problemSolveCounter:"+AcceptedCounterUsers);   
                 //problem id   
                        
                     
                        if(userInProblem ===0)
                        {
                              if(whoSolved.length>=1){

                            
                                 whoSolved.forEach((val, index)  => {
                                    console.log("inside who solved"+val.userEmail);

                                       if(val.userEmail === userEmail){
                                          userInProblem =1;
                                          console.log("userIdExist 1");
                                          index = whoSolved.length;
                                          //break the loop;
   
                                       }
                                       
                                 });  
                              }else {
                                 console.log("who sloved empty");
                                console.log("acceptCounterForProblem"+acceptCounterForProblem);
                               }                                 

                        }
                        else{
                           console.log("userInProblem already 1");
                        }                                            
                  
                        if(userInProblem === 0){

                                 console.log("User DB and Problem db will be updated");                                                            
                                 updateUserDb(userEmail,memory);
                                 updateProblemDB();        
                        }
                        else{
                           console.log("BD wont updated(already solved it )");
                        }
               }  
            else{
            console.log("user email still empty");
            }    
  }




  const handleViewProfile  =async()=>{
       //for problem setter name;
       const {data} = await Axios.get('http://localhost:5000/RegistraionAndLogin/viewProfile',{
         headers:{
             'x-access-token':localStorage.getItem('token'),
         }
     })
     if(data.success === true){
      setuserEmail(data.email);
      setAcceptedCounterUsers(data.ProblemAcceptedCounter);
      setuserProblemSolveList(data.acceptedList);       
     }else{
         alert(data.error);
   }
  }
  const problemDesAxios = async(id)=>{
   console.log("problemDes");
   let obj ={
      id:'id'
   }
   try{
         
      const {data} = await Axios.get('http://localhost:5000/problemAdd/problemDetailse',{
         headers:{
             'id':id,
         }
     })

      if(data.success === true){
         // console.log("data.acceptCounter"+data.acceptCounter);
         setacceptCounterForProblem(data.acceptCounter)
         setwhoSolved(data.acceptedList);
         setproblemName(data.name);
         //console.log("data.acceptedList"+data.acceptedList);
       }    
  }catch(error){
      alert("could not found problem DB"+error);

  }

     
  }   
  const updateProblemDB = async()=>{  

   
   console.log("from updateProblemDb");

   let obj ={
      userEmail:userEmail,
      
   }
   let arr = [...whoSolved,obj];
   //console.log("arr"+arr);
   console.log("problemDB:_"+arr);
   arr.forEach((val)=>{
         console.log("inside arr:"+val.userEmail);
   })
   let counter = acceptCounterForProblem;
   counter = counter+1;
   console.log("counter"+counter);
 
  
   const updateDB={
      
      acceptCounter:counter,
      acceptedList:arr,
      id:problemId

      }
  
   //console.log("counter problem"+ acceptCounterForProblem);

  try{
         
       const {data} = await Axios.put('http://localhost:5000/problemAdd/updateProblem',updateDB);
       if(data.user){
         window.confirm('Problem infor updated sucessfully');

      }else{
         alert('couldnnot updated  user');
      }
   }catch(error){
       alert("could not update problem DB"+error);

   }
   

}    
  const updateUserDb= async(gmail,memory)=>{  
         //console.log("from user update")
         console.log("user cput Time:"+renderTime);
         console.log("user jobMemory:"+memory);
         let obj ={
            problemId:problemId,
            Status:"Accepted",
            problemName:problemName,
            cpuTime:renderTime,
           jobMemory:memory
         }
         let arr = [''];
         arr = [...userProblemSolveList,obj];
         //console.log("arr"+arr);
         //console.log("userProblemSolveList length:"+userProblemSolveList.length);
         let counter = AcceptedCounterUsers;
         counter = counter+1;
       
        
         const UpdateUser={
                         
            ProblemAcceptedCounter: counter,
            email:gmail,
            problemSolvedList:arr

            }
            console.log("counter"+UpdateUser.ProblemAcceptedCounter + "problemList:"+ UpdateUser.problemSolvedList+"email "+UpdateUser.email);
           try{              

                      
              
                   const {data} = await Axios.put("http://localhost:5000/RegistraionAndLogin/updateUser", UpdateUser);
                 
                    console.log("data.user"+data.user);
                    if(data.user){
                       window.confirm('user infor updated sucessfully');

                    }else{
                       alert('couldnnot updated  user');
                    }


           }
           catch(err){
              console.log("could not updated user"+err);
         }   
 }
    return (
     <>
    
      <div className="wrap">

        <h1>Online Code Compiler</h1>

        <div className="body_column">
          <div>
            <h1>input:output</h1>
         
           <select
             value={language}
             onChange={
                (e)=>{
                 let response = window.confirm("WARNING:Switching the language,will remove your code"
                 );
                 if(response)
                 {
                  setlanguage(e.target.value);
                  console.log(e.target.value);
                 }
                }
             }
           >
               <label>language</label>
               <option value="cpp">C++</option>
               <option value="py">Python</option>
           </select>
        </div>
        <CodeMirror className="editor"
             height='400px'
             width='1500px'
             options={{
               theme: 'dracula',
               tabSize: 2,
               mode: language,
               autoCloseBrackets: true,
               lineNumbers: true,
               tabSize: 2,
               tabindex: 2,
               indentWithTabs: true,
             }}
             value ={code}
              onChange={(editor,viewUpdate)=>{
               setCode(editor.getValue())
             }}
         />
        <br/>
       
   
       
        <h3>Test against Custom Input</h3>
        <textarea className='customInput'
            
             value={customInputFirst}
             onChange={(e)=>{setCustomInputFirst(e.target.value)}}
            
         >
         </textarea>
         <br/><br/>
   
         <button className='run_btn' onClick={ ()=>handleSubmit("run")}>Run</button>
         <button className ='submit_btn'onClick={()=>handleSubmit("submit")}>Submit</button> 
         <button className ='submit_btn'onClick={handleViewProfile}>profile</button> 

        
     {/* <p>{customInput}</p>
        <p>{status}</p>
       <p>{jobId && `JobId: ${jobId}`}</p>
        <p>{renderTimeDetailse()}</p> */}
         <p>{renderTimeDetailse()}</p>
        <p>{output}</p>
        <p>Memory space :{jobMemory}MB</p>
       </div>
       </div>
   </>
    );
            }
  export default ProblemSubmit;