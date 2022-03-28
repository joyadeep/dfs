import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import {Routes,Route} from "react-router-dom"
import About from './components/About';
import Menu from './pages/Menu';
import Error from './pages/Error';
import ForgotPw from './pages/ForgotPw';
function App() {
  return (
    <div className='bg-slate-100 min-h-screen '>
     <Header/>
     <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path="/about" element={<About/>} />
       <Route path="/menu" element={<Menu/>} />
       <Route path='/resetpw' element={<ForgotPw/>} />
       <Route path="*" element={ <Error/> } />
     </Routes>
    </div>
  );
}

export default App;
