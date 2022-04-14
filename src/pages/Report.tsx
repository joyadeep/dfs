import React from 'react'
import Button from '../components/Button'
import InputField from '../components/InputField'

const Report = () => {
  
  return (
    <>
    <div className='space-y-3'>

      <div className='mt-5 w-1/2 mx-auto flex justify-center items-center gap-x-2 '>
        <InputField placeholder='starting date' type="text" misc={(e)=>{e.target.type='date'}} />
        <InputField placeholder='ending date' type="text" misc={(e)=>{e.target.type='date'}} />
        <Button color='bg-blue-500' name='search' misc='ml-5'  />
      </div>
      <div className=' w-1/2 mx-auto flex justify-center items-center gap-x-2 '>
        <InputField placeholder='starting date' type="text" misc={(e)=>{e.target.type='date'}} />
        <InputField placeholder='ending date' type="text" misc={(e)=>{e.target.type='date'}} />
        <Button color='bg-blue-500' name='search' misc='ml-5'  />
      </div>
      <div className=' w-1/2 mx-auto flex justify-center items-center gap-x-2 '>
        <InputField placeholder='starting date' type="text" misc={(e)=>{e.target.type='date'}} />
        <InputField placeholder='ending date' type="text" misc={(e)=>{e.target.type='date'}} />
        <Button color='bg-blue-500' name='search' misc='ml-5'  />
      </div>
      <div>
        {/* <select className='w-40 h-10 pl-4'>
          <option value="2022" className='h-10 py-5 bg-blue-300'>2022</option>
          <option value="2021" className='hover:bg-red-400'>2021</option>
          <option value="2020">2020</option>
          </select> */}
      </div>
    </div>
    </>
  )
}

export default Report