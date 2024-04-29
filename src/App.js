
import './App.css';

import Nav from './components/Nav';
import Cardadd from './components/Cardadd';
import Dataviewa from './components/Dataviewa';
import { Route, Routes } from 'react-router-dom';
import Ud from './components/Ud';
import Detalis from './components/Detalis';
import Login from './components/Login';
import Signup from './components/signup';
import Feedbackview from './components/Feedbackview';




function App() {
  return (
    <div className="App">
<Feedbackview/>
      <Routes>
      <Route path='/'element={<><Nav/></>}/>
      <Route path='/Login'element={<><Nav/><Login/></>}/>
      <Route path='/Signup'element={<><Nav/><Signup/></>}/>
      <Route path='/Ud'element={<><Ud/><Dataviewa/></>}/>
      <Route path='/Detalis'element={<><Detalis/><Cardadd/></>}/>
     
      </Routes>
    
 
     

   
    </div>
  );
}

export default App;
