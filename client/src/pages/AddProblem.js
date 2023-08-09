import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import Axios from 'axios';
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import AddProblemCss from "../pagesCss/AddProblem.module.css";



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
  const [problemSetterAllInputTestCase, setProblemSetterAllInputTestCse] = useState([]);
  const [problemSetterAllOutput, setProblemSetterAllOutput] = useState([]);
  const [problemSetterInputOutput, setProblemSetterInputOutput] = useState([]);

  const [problemTimeLimit, setProblemTimeLimit] = useState('');
  const [problemMemoryLimit, setProblemMemoryLimit] = useState('');
  const [problemSetterName, setProblemSetterName] = useState('');

  const token = localStorage.getItem('token');



  const addButtonHandler = async()=>{
          //for problem setter name;
          const {data} = await Axios.get('http://localhost:5000/RegistraionAndLogin/viewProfile',{
            headers:{
                'x-access-token':localStorage.getItem('token'),
            }
        })
        if(data.success === true){
            setProblemSetterName(data.firstName+data.lastName);
            //alert(problemSetterName);
          
        }else{
            alert(data.error);
      }

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
             memoryLimit:problemMemoryLimit,
             problemSetterName:problemSetterName,
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
     {token ?
                
        <div class="wrap">
          <div class="body_column">
        
        <h1 className={AddProblemCss.problemh1}>
          Problem
        </h1>

          <p className="">
            Get started by providing the initial details needed to create a
            problem.
          </p>    

        <div className={AddProblemCss.formBody}>
          <div className={AddProblemCss.problem_id}>
            <p className="">Problem Id</p>
            <input
              value={problemId}
             
              type=""
              required
              placeholder="Must fill and should be unique"
              onChange={(e)=>{setProblemId(e.target.value)}}
            />
          </div>
          <div className={AddProblemCss.ProblemName}>
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
          <div className={AddProblemCss.memoryLimit}>
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
          <div className={AddProblemCss.timeLimit}>
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

          <div className={AddProblemCss.description1}>
            <p className="">Description</p>

            <MDEditor
            
              value={problemDescription}
              className={AddProblemCss.description}
              required
              preview="edit"
              placeholder="must fill"
              onChange={setProblemDescription}
            />
          </div>
          
            <p className="">Input Format</p>
            <div className="">
              <MDEditor
              className={AddProblemCss.inputFormat}
                value={problemInputFormat}
               
                preview="edit"
                onChange={setProblemInputFormat}
              />
            </div>
        
            <p className="">Output Format</p>
            <div className={AddProblemCss.outputFormat}>
              <MDEditor
                className={AddProblemCss.outputFormat}
                value={problemOutputFormat}
                preview="edit"
                onChange={setProblemOutputFormat}
            
              />
          </div>

          <div className={AddProblemCss.userAndsetterInputOutput}>
              <div className={AddProblemCss.firstSampleInputOutput}>
                <p className="">First Sample Input Output: </p>
                      <textarea
                            value={FirstSampleInput}                      
                            type="text"
                            className={AddProblemCss.firstSampleInput}
                            required
                            placeholder="must fill(each number in seperate line)"
                            onChange={(e)=>{setFirstSampleInput(e.target.value)}}
                      />
                      <textarea
                            value={FirstSampleOutput}                        
                            type="text areah"
                            className=""
                            required
                            placeholder="must fill(each number in seperate line)"
                            onChange={(e)=>{setFirstSampleOutput(e.target.value)}}
                    />
              </div>
              <div className={AddProblemCss.secondSampleInputOutput}>
                <p className="">Second Sample Input Output : </p>
                <textarea
                  value={SecondSampleInput}
                
                  type="text"
                  className={AddProblemCss.secondSampleInput}
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
        
              <div className="">
                <p className="">Setter  Input Output : </p>
                <div className={AddProblemCss.problemSetterAllInputOutput}>
                      <textarea
                            value={problemSetterAllInputTestCase}
                          
                            type="text"
                            className={AddProblemCss.setterInput}
                            required
                            placeholder="must fill(each number in seperate line)"
                            onChange={(e)=>{setProblemSetterAllInputTestCse(e.target.value)}}
                      />
                    
                        <textarea
                            value={problemSetterAllOutput}            
                          
                            type="text"
                            required
                            placeholder="must fill(multiple output will be in same line using space)"

                            onChange={(e)=>{setProblemSetterAllOutput(e.target.value)}}
                      />
                </div>
                 <br />
              <button className={AddProblemCss.button} onClick={addTestCase}>Add test case</button>
             

              </div>
          </div>
         <button className={AddProblemCss.button} onClick={addButtonHandler}>Add Problem</button>
        

        </div>

      


      </div>
    </div> 
    :<h1>You are not logged in</h1>}
    </>
  );
}