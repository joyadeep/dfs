import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {Link,useNavigate} from 'react-router-dom'
import { logout } from '../features/user/userSlice';


const UserMenu:React.FC = () => {

  const dispatch=useDispatch();
  const [time,setTime]=useState<string>((new Date()).toLocaleString());
  const navigate=useNavigate();
 
  
  useEffect(()=>{
   const interval=setInterval(()=>{
      setTime((new Date()).toLocaleString());
    },1000)  

    return ()=>clearInterval(interval);
    
  },[setTime])

const handleClick=()=>{
  dispatch(logout());
  navigate("/");

}

  return (
    <div className='absolute py-1 sm:px-0 sm:static bg-slate-400 w-full h-screen sm:w-1/2 sm:bg-transparent sm:h-fit '>
            <div className='flex flex-row'>
              <div className='w-fit ml-auto h-fit bg-gray-800'>
              <img src="/userimg.jpg" alt="" className=' h-20 sm:rounded-none rounded-full object-cover' />
              </div>
            <div className=' pl-3'>
              <div className='text-xl font-semibold'>Joyadeep Limbu</div>
              <div>DFS ID : <span className='font-semibold'>4152</span> </div>
            <div>{time}</div>
            </div>
              </div>
            <nav className='flex flex-col text-2xl space-y-5  sm:space-y-0 mt-7  sm:flex-row sm:text-xl sm:mt-2 sm:mb-1 sm:font-semibold sm:justify-between  sm:w-11/12 mx-auto'>
              <Link to="/menu" className='border-b rounded-none sm:border-2 sm:border-purple-500 px-2 py-1 sm:rounded-md hover:bg-purple-300 hover:border-purple-300 hover:text-white'>Deerwalk Foods</Link>
              <Link to="/feedback" className='border-b rounded-none sm:border-2 sm:border-purple-500 px-2 py-1 sm:rounded-md hover:bg-purple-300 hover:border-purple-300 hover:text-white'>Feedback</Link>
              
              <div className='group relative border-b rounded-none sm:border-2 sm:border-purple-500 px-2 py-1 sm:rounded-md hover:bg-purple-300 hover:border-purple-300 hover:text-white'>
                <div className='cursor-pointer'>Report</div>
                <div className='group-hover:block left-0 hidden rounded-md absolute w-40 z-10 mt-1 py-3 px-3 bg-slate-400 text-white'>
                  <Link to="/report">My Report</Link>
                  <Link to="/" className='block'>Your Report</Link>
                  <Link to="/">Our Report</Link>
                </div>
              </div>

              <div className='group   border-b rounded-none sm:border-2 sm:border-purple-500 px-2 py-1 sm:rounded-md hover:bg-purple-300 hover:border-purple-300 hover:text-white'>
                <div className='cursor-pointer'>Account</div>
                <div className='group-hover:block hidden text-lg font-normal rounded-md absolute right-3  w-fit z-10 mt-1 py-3 px-3 bg-slate-400 text-white'>
                  <Link to="/change_password">Change Password</Link>
                  <button className='block' onClick={()=>{handleClick()}}>Signout</button>
                </div>
              </div>
            </nav>
            
    </div>
  )
}

export default UserMenu