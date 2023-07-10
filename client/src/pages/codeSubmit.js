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
    const [setterInput, setSetterInput] = useState("");
    const [problemId, setProblemId] = useState('');
    const [problemSetterInput, setProblemStterInput] = useState([]);
    const [problemStterOutput, setProblemStterOutput] = useState([]);
    const [problemStterInputOutput, setProblemStterInputOutput] = useState([]);


    
  
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
     // let Setteroutput = location.state.problemStterOutput;
     //console.log("setter input via useLocation"+SetterInputLocation);
     //console.log("setter output via useLocation"+Setteroutput);
     console.log("setterInputOutput"+problemStterInputOutput);

     //have to extract the input output from object;
      setProblemId(id);
      setProblemStterInput('1');
      setProblemStterOutput('2');
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
  
                             if(success){
  
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
   const CheckSetterInputOutput=()=>{
       alert("checked setter input output");
       
         Array.isArray(problemStterInputOutput)
         ?  problemStterInputOutput.map((obj,index)=>(
               console.log(`input:+${obj.setterInput}`)
            )
         ):console.log("not found setter input output")
         
   }
  
  
      
    return (
     
      <div className="wrap">
        <h1>Online Code Compiler</h1>
        <div className="body_column">
          <div>
            <h1>input:output</h1>
          {
              problemStterInputOutput.map((obj,index)=>(
                 <div key={index}>
                   <span> input:{obj.setterInput}</span>
                   <span>output:{obj.setterOutput}</span>
                 </div>
              )
              )
              }
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
         <button onClick={CheckSetterInputOutput}>check setter Input Output</button>
        
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