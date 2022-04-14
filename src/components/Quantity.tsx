import React, { useState } from 'react'
import {MinusIcon,PlusIcon} from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { decreasePrice, updatePrice } from '../features/food/totalPriceSlice'
import { food, order } from '../interfaces/foodInterface'

type availableQtyType={
    availableQty:number,
    quantity:number,
    setQuantity:React.Dispatch<React.SetStateAction<number>>,
    rate:number,
    food:food,
    order:order[],
    setOrder:React.Dispatch<React.SetStateAction<order[]>>
}

const Quantity:React.FC<availableQtyType> = ({quantity,setQuantity,availableQty,rate,food,order,setOrder}) => {
    
    const total=useSelector((state:RootState)=>state.totalPrice.totalPrice);
    const dispatch=useDispatch();
    
    
    
    const handleMinus=():void=>{
        if(quantity!==0){
            setQuantity(quantity-1)
            console.log(`minus : foodid: ${food.id} ${food.name}`);
            
            dispatch(decreasePrice(rate));
        }
    }
const handlePlus=()=>{
    if(availableQty!==0)
    {
        if(quantity<availableQty)
        {
            setQuantity(quantity+1);
            // console.log(`plus : foodid: ${food.id} ${food.name}`);
            dispatch(updatePrice(rate));
            // setOrder([...order,{userId:1,foodId:food.id,item:food.name,rate:food.rate,price:food.price,quantity:1,status:false,time:new Date().toString()}])
            // if(food.id===order.)
            order.map((item)=>{
                if(item.foodId===food.id)
                {
                    // TODO update object
                // console.log(`food matched !!! quantity : ${quantity}`);
                console.log(`quantity before : ${quantity}`);
                
                    const index=order.findIndex(item=>item.foodId===food.id)
                    order[index]={userId:1,foodId:item.foodId,item:food.name,rate:food.rate,price:food.rate*quantity,quantity:quantity,status:false,time:new Date().toString()}
                    // console.log(`food id : ${item.foodId} index: ${index}`);
                    // console.log(order);

                    console.log(`quantity after : ${quantity}`);
                    
                }

                else{
                    setOrder([...order,{userId:1,foodId:food.id,item:food.name,rate:food.rate,price:food.price,quantity:1,status:false,time:new Date().toString()}])
                    console.log('item updated');
                    console.log(order);
                    
                    
                }
            })
            
            
        }
        else
        return quantity;
    }
}
  return (
    <div className='select-none w-full flex sm:w-auto items-center justify-center space-x-0'>
        <MinusIcon onClick={handleMinus} 
            className={availableQty!==0?' w-10 h-7 px-1 sm:w-8 bg-green-600 sm:h-8   text-3xl  rounded-md cursor-pointer':'w-10 h-7 px-1 sm:w-8 bg-slate-400 sm:h-8   text-3xl  rounded-md cursor-pointer'} 
        />
        <div 
            className={availableQty===0?'text-gray-500 text-sm sm:text-xl  w-7 sm:w-10':'text-white text-sm sm:text-xl  w-7 sm:w-10'}>{quantity}
        </div>
        <PlusIcon onClick={handlePlus} 
            className={availableQty!==0?'flex w-10 h-7 px-1 sm:w-8 sm:h-8 bg-green-600 text-3xl  rounded-md cursor-pointer':'flex w-10 h-7 px-1 sm:w-8 sm:h-8 bg-slate-400 text-3xl  rounded-md cursor-pointer'} 
        />

    </div>
  )
}

export default Quantity