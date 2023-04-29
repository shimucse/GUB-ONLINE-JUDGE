import './App.css';
import React,{useState} from 'react';
import Axios from 'axios';

function App() {
  const[code,setCode] = useState('');
  const[output, setOutput] = useState('');
  const [language,setlanguage] = useState("cpp");
  
  const handleSubmit = async() =>{
      const payload = {
        language : language,
        code:code 
      };
  try{
  const {data} = await Axios.post("http://localhost:5000/run", payload)
  setOutput(data.output);
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
    <div className="App">
     <h1>Online Code Compiler</h1>
     <div>
        <select
          value={language}
          onChange={
             (e)=>{
               setlanguage(e.target.value);
               console.log(e.target.value);
             }
          }
        >
            <label>language</label>
            <option value="cpp">C++</option>
            <option value="py">Python</option>
        </select>
     </div>
     <textarea
         rows ='20'
          cols='75'
          value ={code}
           onChange={(e)=>{setCode(e.target.value)
          }}
      >
      </textarea>
     <br/>
     <button onClick={handleSubmit}>Submit</button>
     <p>{output}</p>
    </div>
  );
}

export default App;
