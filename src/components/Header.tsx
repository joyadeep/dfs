import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import UserMenu from './UserMenu';



const Header:React.FC = () => {
   const isLoggedIn=useSelector((state:RootState)=>state.user.isLoggedIn);
  return (
    <header className='relative h-fit sm:h-15 w-full px-3 py-1 sm:py-3 bg-white sm:flex sm:justify-between items-center sm:px-10 '>
        <img src="./assets/logo.png" alt="" className='w-1/3 object-cover sm:w-auto' />
        { isLoggedIn && <UserMenu />}
    </header>
  )
}

export default Header