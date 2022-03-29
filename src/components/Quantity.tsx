import React, { useState } from 'react'
import {MinusIcon,PlusIcon} from '@heroicons/react/outline'

const Quantity:React.FC = () => {
    const [qty,setQty]=useState<number>(0);
    const handleMinus=():void=>{
        if(qty!==0){
            setQty(qty-1)
        }
    }
  return (
    <div className='w-full flex sm:w-auto items-center justify-center space-x-0'>
        <MinusIcon onClick={handleMinus} 
            className='w-10 h-7 px-1 sm:w-10 bg-purple-500 sm:h-10   text-3xl  rounded-md cursor-pointer' 
        />
        <div 
            className='text-white text-sm sm:text-xl   w-7 sm:w-10'>{qty}
        </div>
        <PlusIcon onClick={()=>{setQty(qty+1)}} 
            className='flex w-10 h-7 px-1 sm:w-10 sm:h-10 bg-purple-500 text-3xl  rounded-md cursor-pointer' 
        />

    </div>
  )
}

export default Quantity