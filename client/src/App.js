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
import Dashboard from './pages/UserProfile';
import Logout from './pages/Logout';
import UserProfile from './pages/UserProfile';
import Contest from './pages/contest/Contest';
import Standing from './pages/contest/Standing';
import Submission from './pages/Submission'
import AcceptedProblem from './pages/AcceptedProblem';
import ContestCreate from './pages/contest/ContestCreate';
import DisplayContest from './pages/contest/DisplayContest';
import NewProblem from './pages/contest/NewProblem';
import ContestProblemList from './pages/contest/ContestProblemList';

function App() {
   const [active, setActive] = useState('');

    return (
    <div className="App">
     
     <BrowserRouter>
        <nav className="nav">
        
             <a><Link to={"/"}>Home</Link></a>        
            
             <a><Link to={"AddNewProblem"}>Add New Problem</Link></a>
          
             <a><Link to={"ProblemList"}>ProblemList</Link></a>
        
             <a><Link to={"Contest"}>Contest</Link></a>       
           
          
             <a><Link to={"Standing"}>Standing</Link></a>
            
             <a><Link to={"...."}>Discussion</Link></a>
           
             <a><Link to={"UserProfile"}>Profile</Link></a>
           
             <a><Link to={"Logout"}>Login/Logout</Link></a>
            
          

        </nav>
        <div className="container">

            <Routes >
                <Route clssName="HomePage" index element={<HomePage />} />
                <Route  exact path="AddNewProblem" element={<AddProblem/>}/>
                <Route exact path="ProblemList" element={<ProblemList/>}/>
                <Route exact path="ProblemSubmit" element={<ProblemSubmit/>}/>
                <Route exact path="ProblemDisplay" element={<ProblemDisplay/>}/>
                <Route exact path="Registration" element={<Registration/>}/>
                <Route exact path="Login" element={<Login/>}/>
                <Route exact path="Dashboard" element={<Dashboard/>}/>
                <Route exact path="Logout" element={<Logout/>}/>
                <Route exact path="UserProfile" element={<UserProfile/>}/>
                <Route exact path="Contest" element={<Contest/>}/>
                <Route exact path="Standing" element={<Standing/>}/>
                <Route exact path="Submission" element={<Submission/>}/>
                <Route exact path="Submission" element={<AcceptedProblem/>}/>
                <Route exact path="ContestCreate" element={<ContestCreate/>}/>
                <Route exact path="DisplayContest" element={<DisplayContest/>}/>
                <Route exact path='NewProblem' element={<NewProblem />}/>
                <Route exact path='ContestProblemList' element={<ContestProblemList />}/>



            </Routes>
        </div>
      </BrowserRouter>    
      
    </div>
  );
}

export default App;
