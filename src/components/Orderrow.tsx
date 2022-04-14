import React, { useState } from 'react'
import {TrashIcon} from '@heroicons/react/outline'
import { Iorder } from '../interfaces/foodInterface';

interface Iorderrow{
    item:Iorder
}

const Orderrow:React.FC<Iorderrow> = (item) => {
    const[isChecked,setIschecked]=useState(true);
  return (
    <>
         <tr className='odd:bg-slate-300 even:bg-slate-400 text-center h-10'>
                        <td className='border'>{item.item.status==="ON PROCESS" && <input type="checkbox" name="check" className='w-4 h-4' checked={isChecked} onChange={()=>{setIschecked(!isChecked)}} />}</td>
                        <td className='border'>{item.item.item}</td>
                        <td className='border'>{item.item.rate}</td>
                        <td className='border'>{item.item.quantity}</td>
                        <td className='border'>{item.item.amount}</td>
                        <td className='border'>{item.item.status}</td>
                        <td className='border'>{item.item.orderTime}</td>
                        <td className='border'>{item.item.maxServeTime}</td>
                        <td className='border'>{item.item.status==="ON PROCESS" && <TrashIcon className=' text-red-500 w-6 h-6 mx-auto cursor-pointer ' />} </td>
                    </tr>
                    
    </>
  )
}

export default Orderrow