import './App.css';
import React,{useState, useEffect} from 'react';


import AddProblem from './pages/AddProblem';
import ProblemDisplay from './pages/ProblemDisplay';
import ProblemSubmit from './pages/codeSubmit';

function App() {
   const [active, setActive] = useState('');

    return (
    <div className="App">
     
     <nav>
        <button onClick={()=> setActive('AddProblem')}>AddProblem</button>
        <button onClick={()=> setActive('ProblemDisplay')}>ProblemDisplay</button>
        <button onClick={()=> setActive('ProblemSubmit')}>Code Submit</button>


     </nav>
     <div>
       {active === 'AddProblem' && <AddProblem/>}
       {active === 'ProblemDisplay' && <ProblemDisplay/>}
       {active === 'ProblemSubmit' && <ProblemSubmit/>}
     </div>
      
    </div>
  );
}

export default App;
