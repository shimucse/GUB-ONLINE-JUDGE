import MDEditor from "@uiw/react-md-editor";
import Axios from 'axios';
import React,{useState} from "react";



export default function AddProblem() {
  const [problemId, setProblemId]= useState('');
  const [problemTitle, setProblemTitle] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [problemInputFormat, setProblemInputFormat] = useState('');
  const [problemOutputFormat, setProblemOutputFormat] = useState('');
  const [FirstSampleInput, setFirstSampleInput] = useState([]);
  const [FirstSampleOutput, setFirstSampleOutput] = useState([]);
  const [SecondSampleInput, setSecondSampleInput] = useState([]);
  const [SecondSampleOutput, setSecondSampleOutput] = useState([]);
  const [problemSetterAllInputTestCase, setProblemSetterAllInputTestCse] = useState('');
  const [problemSetterAllOutput, setProblemSetterAllOutput] = useState('');
  const [problemSetterInputOutput, setProblemSetterInputOutput] = useState([]);

  const [problemTimeLimit, setProblemTimeLimit] = useState('');
  const [problemMemoryLimit, setProblemMemoryLimit] = useState('');

  const addButtonHandler = async()=>{
      if(problemId.trim().length !== 0 && problemTitle.trim().length!==0 && problemDescription.trim().length!==0 
      && FirstSampleInput.trim().length!==0 && FirstSampleOutput.trim().length!==0 && SecondSampleInput.trim().length!==0 &&
       SecondSampleOutput.trim().length!==0)
      {
          console.log(problemId);
          console.log(problemTitle);
          console.log(problemDescription);
          console.log(FirstSampleInput);
          console.log(FirstSampleOutput);
          console.log(SecondSampleInput);
          console.log(SecondSampleOutput);
          Array.isArray(problemSetterInputOutput)
            ? problemSetterInputOutput.map((obj, key)  => {
                console.log("setterInputoutput:"+obj.setterInput);
            }):console.log("problemSetterInputOutput is empty")

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

             problemSetterAllInputOutputTestCase:problemSetterInputOutput,
             timeLimit:problemTimeLimit,
             memoryLimit:problemMemoryLimit
          }
            try{
                  const {data} = await Axios.post('http://localhost:5000/problemAdd/submit', problemDetailse);
                  console.log("data from problem add"+data);
                  window.confirm(' New Problem added sucessfully');

            }
            catch(errMsg){
              // window.confirm(' Error : id should be unique');
              window.confirm(errMsg);
            }
      }
      else{
        window.confirm("WARNING:Fill the  all field 'must include' ");
      }
      
  }

  const addTestCase =()=>{
    if(problemSetterAllInputTestCase && problemSetterAllOutput){
       //window.confirm("testcase added")
      let inputOutputobj={
          setterInput:problemSetterAllInputTestCase,
          setterOutput:problemSetterAllOutput
      }
      setProblemSetterInputOutput([inputOutputobj, ...problemSetterInputOutput]);
      //for display purposes only
      console.warn('added',{problemSetterInputOutput});
    }
    else{
       window.confirm("add setter input and output");
    }
  }
  return (
    <>
        <div class="wrap">
          <div class="body_column">
            <h1>Setter Input Output List </h1>
              {
              problemSetterInputOutput.map((obj,index)=>(
                 <div key={index}>
                   <span> input:{obj.setterInput}</span>
                   <span>output:{obj.setterOutput}</span>
                 </div>
              )
              )
              }
        
        <h1 className="">
          Problem
        </h1>

          <p className="">
            Get started by providing the initial details needed to create a
            problem.
          </p>    

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
            <textarea
              value={FirstSampleInput}
             
              type="text"
              className=""
              required
              placeholder="must fill(each number in seperate line)"
              onChange={(e)=>{setFirstSampleInput(e.target.value)}}
            />{console.log(FirstSampleInput)}
              <textarea
              value={FirstSampleOutput}
             
              type="text areah"
              className=""
              required
              placeholder="must fill(each number in seperate line)"
              onChange={(e)=>{setFirstSampleOutput(e.target.value)}}
            />
          </div>
          <div className="">
            <p className="">Second Sample Input Output : </p>
            <textarea
              value={SecondSampleInput}
             
              type="text"
              className=""
              required
              placeholder="must fill(each number in seperate line)"
              onChange={(e)=>{setSecondSampleInput(e.target.value)}}
            />
              <textarea
              value={SecondSampleOutput}
             
              type="text"
              className=""
              required
              placeholder="must fill(each number in seperate line)"

              onChange={(e)=>{setSecondSampleOutput(e.target.value)}}
            />
          </div>       
          //setter INput output
          <div className="">
            <p className="">Setter  Input Output : </p>
            <textarea
              value={problemSetterAllInputTestCase}
             
              type="text"
              className=""
              required
              placeholder="must fill(each number in seperate line)"
              onChange={(e)=>{setProblemSetterAllInputTestCse(e.target.value)}}
            />
              <textarea
              value={problemSetterAllOutput}            
             
              type="text"
              className=""
              required
              placeholder="must fill(each number in seperate line)"

              onChange={(e)=>{setProblemSetterAllOutput(e.target.value)}}
            />
           <button onClick={addTestCase}>Add test case</button>

          </div>
         <button onClick={addButtonHandler}>Add Problem</button>
        

        </div>

      


      </div>
    </div> 
    </>
  );
}