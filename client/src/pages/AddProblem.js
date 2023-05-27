import MDEditor from "@uiw/react-md-editor";
import Axios from 'axios';
import React,{useState} from "react";



export default function AddProblem() {
  const [problemId, setProblemId]= useState('');
  const [problemTitle, setProblemTitle] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [problemInputFormat, setProblemInputFormat] = useState('');
  const [problemOutputFormat, setProblemOutputFormat] = useState('');
  const [FirstSampleInput, setFirstSampleInput] = useState('');
  const [FirstSampleOutput, setFirstSampleOutput] = useState('');
  const [SecondSampleInput, setSecondSampleInput] = useState('');
  const [SecondSampleOutput, setSecondSampleOutput] = useState('');
  const [problemSetterAllInputTestCase, setProblemSetterAllInputTestCse] = useState('');
  const [problemSetterAllOutput, setProblemSetterAllOutput] = useState('');
  const [problemTimeLimit, setProblemTimeLimit] = useState('');
  const [problemMemoryLimit, setProblemMemoryLimit] = useState('');

  const addButtonHandlser = async()=>{
      if(problemId.trim().length !== 0 && problemTitle.trim().length!==0 && problemDescription.trim().length!==0 && FirstSampleInput.trim().length!==0 && FirstSampleOutput.trim().length!==0 && SecondSampleInput.trim().length!==0 && SecondSampleOutput.trim().length!==0){
          const problemDetailse = {
             id: problemId,
             name:problemTitle,
             description:problemDescription,
             inputFormat:problemInputFormat,
             outputFormat:problemOutputFormat,

             firstSampleInput:FirstSampleInput,
             firstSampleOutput:FirstSampleOutput,

             secondSampleInput:SecondSampleInput,
             secondSampleOutput:SecondSampleOutput,

             problemSetterAllInputTestCase:problemSetterAllInputTestCase,
             problemSetterAllOutputTestCase:problemSetterAllOutput,
             timeLimit:problemTimeLimit,
             memoryLimit:problemMemoryLimit
          }
      try{
        const {data} = await Axios.post('http://localhost:5000/problemAdd/submit', problemDetailse);
       //const {data}  =  axios.get('http://localhost:5000/problemAdd');
        console.log("data from problem add"+data);
      }
      catch(errMsg){
        window.confirm(' Error : id should be unique');
      }
      }
      else{
        window.confirm("WARNING:Fill the  all field 'must include' ");
      }
      
  }
  return (
    <>
      <div className="">
        <h1 className="">
          Problem
        </h1>

          <p className="">
            Get started by providing the initial details needed to create a
            problem.
          </p>    

        {/* Problem Details */}
        <div className="">
          <div className="">
            <p className="">Problem Id</p>
            <input
              value={problemId}
             
              type=""
              required
              placeholder="Must fill and should be unique"
              onChange={(e)=>{setProblemId(e.target.value)}}
            />
          </div>
          <div className="">
            <p className="">Problem Name</p>
            <input
              value={problemTitle}
             
              type="text"
              className=""
              required
              placeholder="Must fill"
              onChange={(e)=>{setProblemTitle(e.target.value)}}
            />
          </div>
          <div className="">
            <p className="">MemoryLimit</p>
            <input
              value={problemMemoryLimit}
             
              type="text"
              className=""
              required
              placeholder="write memory limit"
              onChange={(e)=>{setProblemMemoryLimit(e.target.value)}}
            />
          </div>
          <div className="">
            <p className="">Problem time limit</p>
            <input
              value={problemTimeLimit}
             
              type="text"
              className=""
              required
              placeholder="Write problem time limit"
              onChange={(e)=>{setProblemTimeLimit(e.target.value)}}
            />
          </div>

          <div className="">
            <p className="">Description</p>

            <MDEditor
              value={problemDescription}
              
              required
              preview="edit"
              placeholder="must fill"
              onChange={setProblemDescription}
            />
          </div>
         
            <p className="">Input Format</p>
            <div className="">
              <MDEditor
                value={problemInputFormat}
               
                preview="edit"
                onChange={setProblemInputFormat}
              />
            </div>
        
            <p className="">Output Format</p>
            <div className="">
              <MDEditor
                value={problemOutputFormat}
                preview="edit"
                onChange={setProblemOutputFormat}
            
              />
          </div>
          <div className="">
            <p className="">First Sample Input Output: </p>
            <input
              value={FirstSampleInput}
             
              type="text"
              className=""
              required
              placeholder="must fill"
              onChange={(e)=>{setFirstSampleInput(e.target.value)}}
            />
              <input
              value={FirstSampleOutput}
             
              type="text"
              className=""
              required
              placeholder="must fill"
              onChange={(e)=>{setFirstSampleOutput(e.target.value)}}
            />
          </div>
          <div className="">
            <p className="">Second Sample Input Output : </p>
            <input
              value={SecondSampleInput}
             
              type="text"
              className=""
              required
              placeholder="must fill"
              onChange={(e)=>{setSecondSampleInput(e.target.value)}}
            />
              <input
              value={SecondSampleOutput}
             
              type="text"
              className=""
              required
              placeholder="must fill"

              onChange={(e)=>{setSecondSampleOutput(e.target.value)}}
            />
          </div>          
          <div className="">
          <div className="flex">
            <p className="">Add all input String</p>
            <textarea
              value={problemSetterAllInputTestCase}
              rows ='8'
             cols='75'
              type="text"
              className=""
              required
              placeholder="Give all  input"
              onChange={(e)=>{setProblemSetterAllInputTestCse(e.target.value)}}
            />
             
          </div>
          </div>
          <div className="">
          <div className="flex">
            <p className="">Add all output </p>
            <textarea
             rows ='8'
             cols='75'
              value={problemSetterAllOutput}            
              type="text"
              className=""
              required
              placeholder="Give output"
              onChange={(e)=>{setProblemSetterAllOutput(e.target.value)}}
            />
          
          </div>
          </div>          
         <button onClick={addButtonHandlser}>Add Problem</button>
        

        </div>

      


      </div>
     
    </>
  );
}