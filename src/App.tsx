import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import {Routes,Route} from "react-router-dom"
import About from './components/About';
import Menu from './pages/Menu';
import Error from './pages/Error';
import ForgotPw from './pages/ForgotPw';
import ChangePw from './pages/ChangePw';
import Report from './pages/Report';
import Feedback from './pages/Feedback';
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState<boolean>(false);
  return (
    <div className='bg-slate-100 min-h-screen '>
     <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
     <Routes>
       <Route path='/' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path="/about" element={<About/>} />
       <Route path="/menu" element={<Menu/>} />
       <Route path='/resetpw' element={<ForgotPw/>} />
       <Route path="/change_password" element={<ChangePw/>} />
       <Route path="/report" element={<Report/>} />
       <Route path="/feedback" element={<Feedback/>} />
       <Route path="*" element={ <Error/> } />
     </Routes>
    </div>
  );
}

export default App;
