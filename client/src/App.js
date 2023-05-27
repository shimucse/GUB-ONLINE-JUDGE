import './App.css';
import React,{useState} from 'react';


import AddProblem from './pages/AddProblem';
import ProblemDisplay from './pages/ProblemDisplay';
import ProblemSubmit from './pages/codeSubmit'
import ProblemList from './pages/ProblemList';

function App() {
   const [active, setActive] = useState('');

    return (
    <div className="App">
     
     <nav>
        <button onClick={()=> setActive('AddProblem')}>AddProblem</button>
        <button onClick={()=> setActive('ProblemDisplay')}>ProblemDisplay</button>
        <button onClick={()=> setActive('ProblemSubmit')}>CodeSubmit</button>
        <button onClick={()=> setActive('ProblemList')}>ProblemList </button>
     </nav>


     <div>
       {active === 'AddProblem' && <AddProblem/>}
       {active === 'ProblemDisplay' && <ProblemDisplay/>}
       {active === 'ProblemSubmit' && <ProblemSubmit/>}
       {active === 'ProblemList' && <ProblemList/>}
     </div>
     <div>
     </div>
      
    </div>
  );
}

export default App;
