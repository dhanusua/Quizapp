
import './App.css';
import Quizpage from './compontent/Quizpage';
import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import Welcomepage from './compontent/Welcomepage';
import Result from './compontent/result';
import Scoreboard from './compontent/Scoreboard';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcomepage/>}></Route>
      <Route path='/quiz' element={<Quizpage/>}> 
      </Route>
     
    
    <Route path='/result' element={<Result></Result>}> </Route>
    <Route path='/scoreboard' element={<Scoreboard></Scoreboard>}> </Route>
    </Routes>
    
</BrowserRouter>    
  );
}

export default App;
