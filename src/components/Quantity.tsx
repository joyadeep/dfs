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
    <div className='flex w-auto   items-center justify-center space-x-1'>
        <MinusIcon onClick={handleMinus} 
            className='w-6 h-6 text-teal-100 text-3xl  rounded-sm cursor-pointer' 
        />
        <div 
            className='text-white text-xl  w-7'>{qty}
        </div>
        <PlusIcon onClick={()=>{setQty(qty+1)}} 
            className='flex w-6 h-6 text-teal-100 text-3xl  rounded-sm cursor-pointer' 
        />

    </div>
  )
}

export default Quantity