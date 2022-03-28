import React from 'react'
import Button from '../components/Button'

const ForgotPw = () => {
  return (
    <>
        <div className='w-full h-40'>
            <div className='w-11/12 h-fit sm:w-2/3 mx-auto flex flex-col items-center space-y-4'>
                <div className='text-left text-2xl'>Enter your email</div>
                <input type="email" placeholder='Email' name="email" className='w-10/12 text-2xl sm:w-1/2 pl-4 border border-slate-300 h-10 rounded outline-none' />
                <Button name="reset" color='bg-blue-500' font="text-2xl px-3"/>
            </div>
        </div> 
    </>
  )
}

export default ForgotPw