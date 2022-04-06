import React, { useState } from 'react'
import {MinusIcon,PlusIcon} from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { decreasePrice, updatePrice } from '../features/food/totalPriceSlice'

type availableQtyType={
    availableQty:number,
    quantity:number,
    setQuantity:React.Dispatch<React.SetStateAction<number>>,
    rate:number
}

const Quantity:React.FC<availableQtyType> = ({quantity,setQuantity,availableQty,rate}) => {
    
    const total=useSelector((state:RootState)=>state.totalPrice.totalPrice);
    const dispatch=useDispatch();
    
    
    
    const handleMinus=():void=>{
        if(quantity!==0){
            setQuantity(quantity-1)
            dispatch(decreasePrice(rate));
        }
    }
const handlePlus=()=>{
    if(availableQty!==0)
    {
        if(quantity<availableQty)
        {
            setQuantity(quantity+1);
            dispatch(updatePrice(rate));
        }
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