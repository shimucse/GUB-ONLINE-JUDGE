import MDEditor from "@uiw/react-md-editor";
import React,{useState} from "react";



export default function AddProblem() {
  const [problemId, setProblemId]= useState();
  const [problemTitle, setProblemTitle] = useState();
  const [problemDescription, setProblemDescription] = useState();
  const [problemInputFormat, setProblemInputFormat] = useState();
  const [problemOutputFormat, setProblemOutputFormat] = useState();
  const [FirstSampleInput, setFirstSampleInput] = useState();
  const [FirstSampleOutput, setFirstSampleOutput] = useState();
  const [SecondSampleInput, setSecondSampleInput] = useState();
  const [SecondSampleOutput, setSecondSampleOutput] = useState();
  const [problemSetterAllInputTestCse, setProblemSetterAllInputTestCse] = useState();
  const [ problemSetterAllOutput, setProblemSetterAllOutput] = useState();

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
              placeholder=""
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
              placeholder="Write problem name"
              onChange={(e)=>{setProblemTitle(e.target.value)}}
            />
          </div>
          <div className="">
            <p className="">Description</p>

            <MDEditor
              value={problemDescription}
              
              required
              preview="edit"
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
              placeholder="Give input"
              onChange={(e)=>{setFirstSampleInput(e.target.value)}}
            />
              <input
              value={FirstSampleOutput}
             
              type="text"
              className=""
              required
              placeholder="Give output"
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
              placeholder="Give input"
              onChange={(e)=>{setSecondSampleInput(e.target.value)}}
            />
              <input
              value={SecondSampleOutput}
             
              type="text"
              className=""
              required
              placeholder="Give output"

              onChange={(e)=>{setSecondSampleOutput(e.target.value)}}
            />
          </div>          
          <div className="">
          <div className="flex">
            <p className="">Add all input String</p>
            <textarea
              value={problemSetterAllInputTestCse}
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
         <button>Add Problem</button>
         <button>Edit Problem</button>
         <button>Delete Problem</button>

        </div>

       <p>{problemId}</p>
       <p>{problemTitle}</p>
       <p>{problemDescription}</p>
       <p>{problemInputFormat}</p>
       <p>{problemOutputFormat}</p>
       <p>{FirstSampleInput}</p>
       <p>{FirstSampleOutput}</p>

       <p>{SecondSampleInput}</p>

       <p>{SecondSampleOutput}</p>

       <p>{problemSetterAllInputTestCse}</p>
       <p>{problemSetterAllOutput}</p>



      </div>
     
    </>
  );
}