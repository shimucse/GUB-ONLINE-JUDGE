import './App.css';
import React,{useState} from 'react';

import { BrowserRouter, Routes, Route,Link,Router,Outlet } from "react-router-dom";


import AddProblem from './pages/AddProblem';
import ProblemDisplay from './pages/ProblemDisplay';
import ProblemSubmit from './pages/codeSubmit'
import ProblemList from './pages/ProblemList';
import ProblemHtml from './pages/problemHtml';
import HomePage from './pages/Home';

function App() {
   const [active, setActive] = useState('');

    return (
    <div className="App">
     
     <BrowserRouter>
        <nav>
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"AddNewProblem"}>Add New Problem</Link>
        <br/>
        <Link to={"ProblemList"}>ProblemList</Link>

        </nav>
        <Routes>
          <Route index element={<HomePage />} />
          <Route exact path="AddNewProblem" element={<AddProblem/>}/>
          <Route exact path="ProblemList" element={<ProblemList/>}/>
          <Route exact path="ProblemSubmit" element={<ProblemSubmit/>}/>
          <Route exact path="ProblemDisplay" element={<ProblemDisplay/>}/>
        </Routes>
      </BrowserRouter>    
      
    </div>
  );
}

export default App;
