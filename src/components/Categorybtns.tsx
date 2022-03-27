import React from 'react'
import Button from './Button'

const Categorybtns:React.FC = () => {
  return (
    <div className='w-full h-11  flex items-center sticky top-0 px-5 py-7 mb-10  backdrop-blur-sm text-white text-xl justify-between'>
        <Button name="All Items" color="bg-orange-500" />
        {/* <button className='bg-orange-500 px-3 py-1 rounded'>All items</button> */}
        <div className='space-x-2'>
          <Button name="All Time" color="bg-purple-400"/>
          <Button name="Breakfast" color="bg-purple-400"/>
          <Button name="Lunch" color="bg-purple-400"/>
          <Button name="Snacks" color="bg-purple-400"/>
          <Button name="Dinner" color="bg-purple-400"/>
        </div>

    </div>
  )
}

export default Categorybtns