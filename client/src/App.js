import './App.css';
import React,{useState} from 'react';

import { BrowserRouter, Routes, Route,Link,Router,Outlet } from "react-router-dom";


import AddProblem from './pages/AddProblem';
import ProblemDisplay from './pages/ProblemDisplay';
import ProblemSubmit from './pages/codeSubmit'
import ProblemList from './pages/ProblemList';
import ProblemHtml from './pages/problemHtml';
import HomePage from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

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
        <br />

        <Link to={"Registration"}>Registration</Link>
        <br />
        <Link to={"Login"}>Login</Link>

        </nav>
        <Routes>
          <Route index element={<HomePage />} />
          <Route exact path="AddNewProblem" element={<AddProblem/>}/>
          <Route exact path="ProblemList" element={<ProblemList/>}/>
          <Route exact path="ProblemSubmit" element={<ProblemSubmit/>}/>
          <Route exact path="ProblemDisplay" element={<ProblemDisplay/>}/>
          <Route exact path="Registration" element={<Registration/>}/>
          <Route exact path="Login" element={<Login/>}/>
          <Route exact path="Dashboard" element={<Dashboard/>}/>


        </Routes>
      </BrowserRouter>    
      
    </div>
  );
}

export default App;
