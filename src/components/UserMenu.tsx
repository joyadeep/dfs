import React from 'react'
import {Link} from 'react-router-dom'

const UserMenu = () => {
  return (
    <div className='absolute py-1 sm:px-0 sm:static bg-slate-400 w-full h-screen sm:w-1/2 sm:bg-transparent sm:h-fit '>
            <div className='flex flex-row'>
              <div className='w-fit ml-auto h-fit bg-gray-800'>
              <img src="/userimg.jpg" className='w-20 h-20 sm:rounded-none rounded-full object-cover' />
              </div>
            <div className=' pl-3'>
              <div className='text-xl font-semibold'>Joyadeep Limbu</div>
              <div>DFS ID : <span className='font-semibold'>4152</span> </div>
            <div className='text-right'>Thursday, March 31, 2022   2:49:30 PM</div>
            </div>
              </div>
            <nav className='flex flex-col text-2xl space-y-5  sm:space-y-0 mt-7  sm:flex-row sm:text-xl sm:mt-2 sm:mb-1 sm:font-semibold sm:justify-between  sm:w-11/12 mx-auto'>
              <Link to="/menu" className='border-b rounded-none sm:border-2 sm:border-purple-500 px-2 py-1 sm:rounded-md hover:bg-purple-300 hover:border-purple-300 hover:text-white'>Deerwalk Foods</Link>
              <Link to="/" className='border-b rounded-none sm:border-2 sm:border-purple-500 px-2 py-1 sm:rounded-md hover:bg-purple-300 hover:border-purple-300 hover:text-white'>Feedback</Link>
              <Link to="/" className='border-b rounded-none sm:border-2 sm:border-purple-500 px-2 py-1 sm:rounded-md hover:bg-purple-300 hover:border-purple-300 hover:text-white'>My Report V</Link>
              <Link to="/" className='border-b rounded-none sm:border-2 sm:border-purple-500 px-2 py-1 sm:rounded-md hover:bg-purple-300 hover:border-purple-300 hover:text-white'>Account V</Link>
            </nav>
    </div>
  )
}

export default UserMenu