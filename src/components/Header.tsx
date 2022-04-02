import React from 'react'
import UserMenu from './UserMenu';


type LoginProps={
  isLoggedIn:boolean,
  setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>
}

const Header:React.FC<LoginProps> = ({isLoggedIn,setIsLoggedIn}) => {
   
  return (
    <header className='relative h-fit sm:h-15 w-full px-3 py-1 sm:py-3 bg-white sm:flex sm:justify-between items-center sm:px-10 '>
        <img src="./assets/logo.png" alt="" className='w-1/3 object-cover sm:w-auto' />
        { isLoggedIn && <UserMenu setIsLoggedIn={setIsLoggedIn} />}
    </header>
  )
}

export default Header