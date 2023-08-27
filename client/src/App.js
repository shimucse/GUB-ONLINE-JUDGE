import './App.css';
import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
import Home2 from './pages/Home2';

function App() {
   const [active, setActive] = useState('');

    return (
    <div className="App">
     
     <BrowserRouter>
       {/*  <nav className="nav">        
             <a><Link to={"/"}>Home</Link></a>        
            
             <a><Link to={"AddNewProblem"}>Add New Problem</Link></a>
          
             <a><Link to={"ProblemList"}>ProblemList</Link></a>
        
             <a><Link to={"Contest"}>Contest</Link></a>         
          
             <a><Link to={"Standing"}>Standing</Link></a>
            
             <a><Link to={"...."}>Discussion</Link></a>
           
             <a><Link to={"UserProfile"}>Profile</Link></a>
           
             <a><Link to={"Logout"}>Login/Logout</Link></a>          

        </nav>*/}
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div className="container-fluid">
                  <a className="navbar-brand d-flex align-items-center text-warning" href="#">
                      <b>Online</b>.Coding(☕)
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    <a className="nav-link disable" aria-current="page"  href={"Home2"}>Home</a>
                    </li>


                    {/*  <li className="nav-item">
                         <a className="nav-link disable" aria-current="page"  href={"HomePage"}>Home</a>
                        </li>
                     */}

                     
                      <li className="nav-item">
                         <a className="nav-link disable" href={"AddNewProblem"}>NewProblem</a>
                      </li>

                      <li className="nav-item">
                         <a className="nav-link disable" href={"ProblemList"}>ProblemList</a>
                      </li>


                      <li className="nav-item">
                         <a className="nav-link disable" href={"Contest"}>Contest</a>
                      </li>


                      <li className="nav-item">
                         <a className="nav-link disable" href={"Standing"}>Standing</a>
                      </li>


                      <li className="nav-item">
                         <a className="nav-link disable" href={"UserProfile"}>Profile</a>
                     </li>
                    
                  </ul>
                  <form className="d-flex" role="search" style={{marginRight: '20px'}}>
                         <a className="btn btn-outline-success" href={"Registration"}>signUp</a>
                  </form>
                  <form className="d-flex" role="search">
                         <a className="btn btn-outline-success" href={"Logout"}>Login/Logout</a>
                  </form>
                  </div>
              </div>
              </nav> 
        
        <div className="container">

            <Routes >
                <Route exact path="Home2"  element={<Home2 />} />


                <Route  exact path="HomePage"  element={<HomePage />} />

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
