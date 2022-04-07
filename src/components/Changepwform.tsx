import React from 'react'
import Button from './Button'
import InputField from './InputField'

const Changepwform = () => {
  return (
    <div className=' mt-5'>
        <div className='bg-white rounded-md w-2/5 mx-auto py-2 text-3xl text-center'>
            <div className='mb-5 font-semibold'>Reset Password</div>
        <form className=' flex items-center flex-col py-5 text-xl gap-y-3 w-10/12 mx-auto'>
            {/* <input className='rounded-md w-full h-12 pl-5 outline-none' type="password" placeholder='enter old password' /> */}

            <InputField placeholder='enter old password' type='password' />
            <InputField  placeholder='enter new password' type='password' />
            <InputField  placeholder='confirm password' type='password'  />
            <Button name='update' color='bg-blue-500' />
        </form>
        </div>
        <div className='text-justify w-2/5 mx-auto text-md'>
          <span className='text-red-600 text-xl'>*</span> password must contain atleast  <span className='block'>8 characters containing atleast 1 uppercase, 1 lowercase, 1 special character, 1 number</span>
        </div>
    </div>
  )
}

export default Changepwform