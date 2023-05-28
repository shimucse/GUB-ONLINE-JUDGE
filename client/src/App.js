import './App.css';
import React,{useState} from 'react';


import AddProblem from './pages/AddProblem';
import ProblemDisplay from './pages/ProblemDisplay';
import ProblemSubmit from './pages/codeSubmit'
import ProblemList from './pages/ProblemList';
import ProblemHtml from './pages/problemHtml';

function App() {
   const [active, setActive] = useState('');

    return (
    <div className="App">
     
     <nav>
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
     <div>
     </div>
      
    </div>
  );
}

export default App;
