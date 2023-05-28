import './App.css';
import React,{useState} from 'react';
import ReactDOM from 'react-dom';

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


        </Routes>
      </BrowserRouter>
     

     

     
    { /*<nav>
        <button onClick={()=> setActive('AddProblem')}>AddProblem</button>
        <button onClick={()=> setActive('ProblemDisplay')}>ProblemDisplay</button>
        <button onClick={()=> setActive('ProblemSubmit')}>CodeSubmit</button>
        <button onClick={()=> setActive('ProblemList')}>ProblemList </button>
        <button onClick={()=> setActive('ProblemHtml')}>problemHtml </button>

     </nav>


     <div>
       {active === 'AddProblem' && <AddProblem/>}
       {active === 'ProblemDisplay' && <ProblemDisplay/>}
     {active === 'ProblemSubmit' && <ProblemSubmit/>}
       {active === 'ProblemList' && <ProblemList/>}
       {active === 'ProblemHtml' && <ProblemHtml/>}

     </div>
     */}
      
    </div>
  );
}

export default App;
