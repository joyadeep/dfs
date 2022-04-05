import React, { useState } from 'react'
import {MinusIcon,PlusIcon} from '@heroicons/react/outline'

type availableQtyType={
    availableQty:number,
    quantity:number,
    setQuantity:React.Dispatch<React.SetStateAction<number>>
}

const Quantity:React.FC<availableQtyType> = ({quantity,setQuantity,availableQty}) => {
    // const [qty,setQty]=useState<number>(0);
    const handleMinus=():void=>{
        if(quantity!==0){
            setQuantity(quantity-1)
        }
    }
const handlePlus=()=>{
    if(availableQty!==0)
    {
        if(quantity<availableQty)
        setQuantity(quantity+1);
        else
        return quantity;
    }
}
  return (
    <div className='select-none w-full flex sm:w-auto items-center justify-center space-x-0'>
        <MinusIcon onClick={handleMinus} 
            className={availableQty!==0?' w-10 h-7 px-1 sm:w-10 bg-green-500 sm:h-10   text-3xl  rounded-md cursor-pointer':'w-10 h-7 px-1 sm:w-10 bg-slate-400 sm:h-10   text-3xl  rounded-md cursor-pointer'} 
        />
        <div 
            className={availableQty===0?'text-gray-500 text-sm sm:text-xl  w-7 sm:w-10':'text-white text-sm sm:text-xl  w-7 sm:w-10'}>{quantity}
        </div>
        <PlusIcon onClick={handlePlus} 
            className={availableQty!==0?'flex w-10 h-7 px-1 sm:w-10 sm:h-10 bg-green-500 text-3xl  rounded-md cursor-pointer':'flex w-10 h-7 px-1 sm:w-10 sm:h-10 bg-slate-400 text-3xl  rounded-md cursor-pointer'} 
        />

    </div>
  )
}

export default Quantity