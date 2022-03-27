import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='h-15 w-full px-3 py-2    bg-white flex justify-between items-center sm:px-10 '>
        <img src="./assets/logo.png" className='w-1/3 object-cover sm:w-auto' />
        <nav className=' text-sm space-x-5 sm:text-2xl  '>
            <NavLink to="about" className="text-yellow-500 ">
                About
            </NavLink>
            <NavLink to="">
                Account
            </NavLink>
            <NavLink to="menu">
                Menu
            </NavLink>
        </nav>
    </header>
  )
}

export default Header