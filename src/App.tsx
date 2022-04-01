import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import {Routes,Route} from "react-router-dom"
import About from './components/About';
import Menu from './pages/Menu';
import Error from './pages/Error';
import ForgotPw from './pages/ForgotPw';
function App() {
  const [login,setLogin]=useState<boolean>(true);
  return (
    <div className='bg-slate-100 mi5a5aan-h-screen '>
     <Header login={login}/>
     <Routes>
       <Route path='/' element={<Login login={login} setLogin={setLogin}/>}/>
       <Route path="/about" element={<About/>} />
       <Route path="/menu" element={<Menu/>} />
       <Route path='/resetpw' element={<ForgotPw/>} />
       <Route path="*" element={ <Error/> } />
     </Routes>
    </div>
  );
}

export default App;
