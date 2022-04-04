import React from 'react'
import {Navigate} from 'react-router-dom'
import Button from '../components/Button'
const Feedback = () => {

  const handleSubmit=()=>{
    alert("your feedback is submitted");
    <Navigate to="/menu" replace />
    
  }

  return (
    <div className='  flex flex-col items-center mt-16 space-y-5'>
      <div className='text-3xl '>
        feedback page
      </div>
      <form onSubmit={handleSubmit} className='w-1/2 flex space-y-5 flex-col'>
        <textarea name="feedback" className='pl-4 border-2 border-slate-200 pt-3 text-xl outline-none resize-none h-56 rounded-md' placeholder='enter your feedback here...'></textarea>
        <div className='text-center'>
          {/* <button type='submit'>Submit</button> */}
        <Button name="submit" color='bg-blue-500' />
        </div>
      </form>
    </div>
  )
}

export default Feedback