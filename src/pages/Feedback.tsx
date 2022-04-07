import React, { useRef } from 'react'
import {Navigate,useNavigate} from 'react-router-dom'
import Button from '../components/Button'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Feedback:React.FC = () => {

<ToastContainer theme="dark" />
  const feedback=useRef<HTMLTextAreaElement | null>(null);
  const navigate=useNavigate();

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // TODO post feedback to database
    // toast.success("feedback stored successfully")
    toast.info("Display a dark notification of type info");

    (feedback.current as HTMLTextAreaElement).value=""
    navigate('/menu');
  }

  return (
    <div className='  flex flex-col items-center mt-16 space-y-5'>
      <div className='text-3xl font-semibold '>
        feedback
      </div>
      <form onSubmit={(e)=>{handleSubmit(e)}} className='w-1/2 flex space-y-5 flex-col'>
        <textarea name="feedback" ref={feedback} className='pl-4 border-2 border-slate-200 pt-3 text-xl outline-none resize-none h-56 rounded-md' placeholder='Enter your feedback here...'></textarea>
        <div className='text-center'>
        <Button name="submit" color='bg-blue-500' />
        </div>
      </form>
    </div>
  )
}

export default Feedback