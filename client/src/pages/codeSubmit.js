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


import { useLocation} from "react-router-dom";
import "../pagesCss/codeSubmit.css"

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
    const [problemSolvedList, setproblemSolvedList]=useState([]);
    const [acceptCounter, setacceptCounter]=useState(0);
    const [userId, setUserId]=useState('');


    const [problemDes, setProblemDes] = useState([]);


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
      result = `execution Time : ${executionTime}s`
      return result;
   }
  
   useEffect(()=> {
      let id = location.state.id
      let SetterInputOutputLocation = location.state.problemSetterAllInputOutputTestCase;
      setProblemStterInputOutput(SetterInputOutputLocation);
    
     console.log("setterInputOutput"+problemStterInputOutput);

     //have to extract the input output from object;
      setProblemId(id);
    
      let inputTrim = (customInputFirst);      
      setCustomInput(inputTrim);
    // let inputSplice= (inputTrim.split(/\n/))  
   
  
   
     
  },[customInputFirst]);
  
    const handleSubmit = async(SubmitType) =>{
                 
                 

                 console.log("callType:"+SubmitType);
                 let deleteId;
                 let payload ={};
                   payload = {
                           language : language,
                           code:code ,
                           SubmitType:SubmitType,
                           input:customInput,
                           problemSetterAllInputOutputTestCase:problemStterInputOutput,
                           problemId:problemId,
                           submitType:SubmitType
                        
                     };

                
                 try{
                       setJobId("");
                       setStatus("");
                       setOutput("");
                       setJobMemory("");
                       setJobDetails(null);
  
                       const {data} = await Axios.post("http://localhost:5000/codeSubmit/submit", payload)
                       setJobId(data.jobId);
                       let intervalId;
  
                       
                       intervalId = setInterval(async()=>{
  
                             const{data:dataRes} = await Axios.get('http://localhost:5000/codeSubmit/status', {params: {id:data.jobId}});
                             deleteId=data.jobId;
                             const {success, job, error} = dataRes;

                              /**************Updat Accepted/Attempted in userDB and problemDb*************** */
                              //problem database:
                              let useridExistInProblemDB =false;
                                //send problem id to
                                
                                const ProblemDetailse =  Axios.get(`http://localhost:5000/problemAdd/fetch/${problemId}`).then((response)=>{
                                 setProblemDes(response.data); 
                                     //console.log( "dilsplayed problem detailse :"+response.data);

                                //find the user id ;
                               }); 
                               Array.isArray(problemDes)
                               ? problemDes.forEach((val, key)  => {
                                       setproblemSolvedList(val.acceptedList);
                                       setacceptCounter(val.acceptCounter);
                                       console.log("problemSolvedList"+ problemSolvedList);
                                       console.log("acceptCounter"+ acceptCounter);
                                       console.log("seeterName:"+val.problemSetterName);
                                       console.log("length of problemSolvedList"+ problemSolvedList.length);

                                       if(problemSolvedList.length>=1){
                                          problemSolvedList.forEach((val, key)  => {
                                                if(val === 'userId'){
                                                   useridExistInProblemDB = true;
                                                   console.log("found the id ");
                                                   //break the loop;

                                                }
                                          });
                                       }else{

                                          useridExistInProblemDB = false;
                                          console.log("problemSolved List is still empty");

                                       }

                                    
                               }):console.log('problem detailse not found');
                                
                             if(success)
                             {

                                 if(SubmitType === 'submit')
                                 {
                                       if(!useridExistInProblemDB){

                                            console.log("User DB and Problem db will be updated");
                                             //User database
                                                   //query for user Info for update with new data;

                                             
                                                   //-problemAccepted counter++ and check if already solved(check Status);
                                                         /*not already accepted{
                                                               const UpdateUser={
                                                                  Attempted:
                                                                  Status:
                                                                  id:

                                                         }
                                                         }*/
                                                //Problem database
                                                         //query for problem info for update with new data;
                                          }
                                 }
                                   
                                // const {status: jobStatus, output: jobOutput,  jobMemory:memorySpace} = job;
                                const jobStatus = job.status;
                                const jobOutput = job.output;
                                const memory = job.memorySpace;
                                
                                setStatus(jobStatus);
                                setJobDetails(job);
  
                                setOutput(jobOutput);
                                setJobMemory(memory);
                                clearInterval(intervalId);
                               
                                if(SubmitType === 'run'){                                
  
                                   console.log("run will call the delete method"+ deleteId);
                                   await axios.delete('http://localhost:5000/codeSubmit/delete', {params: {id:data.jobId}});
                                   clearInterval(intervalId);
  
                 
                               }
  
                                if(jobStatus === "pending")  return ;    
                                
  
                             }else{
                                       if(SubmitType === 'submit')
                                       {
                                          if(!useridExistInProblemDB){
                                             console.log("will work on wrong answer");
                                          }
                                       }

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
 
  
  
      
    return (
     
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
        
        <p>{customInput}</p>
        <p>{status}</p>
        <p>{jobId && `JobId: ${jobId}`}</p>
        <p>{renderTimeDetailse()}</p>
        <p>{output}</p>
        <p>Memory space :{jobMemory}MB</p>
       </div>
       </div>
    );
  }
  export default ProblemSubmit;