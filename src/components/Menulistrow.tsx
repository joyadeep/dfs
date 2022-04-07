import React, { useState } from 'react'
import { food, order } from '../interfaces/foodInterface'
import Quantity  from './Quantity'

type availableQtyProp={
    availableQty:number,
    food:food,
    totalPrice:number,
    setTotalPrice:React.Dispatch<React.SetStateAction<number>>
    order:order[],
    setOrder:React.Dispatch<React.SetStateAction<order[]>>
}

const Menulistrow:React.FC<availableQtyProp> = ({availableQty,food,totalPrice,setTotalPrice,order,setOrder}) => {
    const [quantity,setQuantity]=useState<number>(0);
    
  return (
      <>
     
    <tr key={food.id} className={availableQty===0?"bg-gray-300 text-gray-500":"text-xs sm:text-xl even:bg-slate-400 odd:bg-slate-500 cursor-pointer transition-all duration-200"}>
    <td className='border py-2 pl-1 sm:pl-4 text-left sm:w-60'>{food.name}</td>
    <td className='border'> <img className='mx-auto w-24 h-16 sm:w-28 overflow-hidden object-cover rounded-sm my-1' src={food.image} alt={food.name}/> </td>
    <td className='border text-center sm:text-left sm:pl-4'> {food.availableTime} </td>
    <td className='border pl-1 sm:pl-4'> {food.rate} </td>
    <td className='border pl-1 sm:pl-4'> {food.initialQty}</td>
    <td className='border pl-1 sm:px-4'>{availableQty}</td>
    <td className='border text-center'><Quantity order={order} setOrder={setOrder} food={food} availableQty={availableQty} rate={food.rate} quantity={quantity} setQuantity={setQuantity} /></td>
    <td className='border pl-2 sm:pl-4'>{food.rate*quantity}</td>
  </tr>
  {console.log(`quantity at Menulistrow : ${quantity}`)
  }
      </>
  )
}

export default Menulistrow;


