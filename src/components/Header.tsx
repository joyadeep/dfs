import React, { useState } from 'react'
import UserMenu from './UserMenu';


type LoginProps={
  login:boolean
}

const Header:React.FC<LoginProps> = ({login}) => {
   
  return (
    <header className='relative h-fit sm:h-15 w-full px-3 py-1 sm:py-3 bg-white sm:flex sm:justify-between items-center sm:px-10 '>
        <img src="./assets/logo.png" className='w-1/3 object-cover sm:w-auto' />
        { login && <UserMenu/>}
    </header>
  )
}

export default Header