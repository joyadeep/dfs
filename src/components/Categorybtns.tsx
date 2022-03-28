import React from 'react'
import Button from './Button'

const Categorybtns:React.FC = () => {
  const logitem=():void=>{
    console.log("clicked button");
    // TODO do similar to other buttons but must filter data using "Redux Toolkit"
  }
  return (
    <div className='w-full h-11  flex items-center sticky top-0 px-0 py-7 mb-10  backdrop-blur-sm text-white text-xl justify-between sm:px-5'>
        <div className='text-sm sm:text-3xl text-gray-800 px-3 py-1 rounded'>All items</div>
        <div className='space-x-1 sm:space-x-2'>
          <Button name="All Time" handleClick={logitem} color="bg-purple-400"/>
          <Button name="Breakfast" color="bg-purple-400"/>
          <Button name="Lunch" color="bg-purple-400"/>
          <Button name="Snacks" color="bg-purple-400"/>
          <Button name="Dinner" color="bg-purple-400"/>
        </div>

    </div>
  )
}

export default Categorybtns