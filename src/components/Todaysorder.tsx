import React, { useState } from 'react'
import Orderrow from './Orderrow';
import { Iorder } from '../interfaces/foodInterface';

interface Itodayorder{
    title:string;
}
const Todaysorder:React.FC<Itodayorder> = ({title}) => {

    const[order,setOrder]=useState<Iorder[]>([
        {id:1,item:"black tea",rate:12.20,quantity:1,amount:11.20,status:"ON PROCESS",orderTime:"11:20 AM",maxServeTime:"04:30 PM"},
        {id:2,item:"milk tea",rate:20.20,quantity:1,amount:20.20,status:"SERVED",orderTime:"10:20 AM",maxServeTime:"04:30 PM"},
        {id:3,item:"lemon tea",rate:40,quantity:2,amount:80,status:"NOT AVAILABLE",orderTime:"11:20 AM",maxServeTime:"04:30 PM"}
    ]);
  return (
    <div className='relative border border-gray-700 rounded-md mt-10 h-fit '>
        <div className='absolute -top-5 left-3 bg-orange-400 rounded text-2xl text-white p-1 '>{title}</div>
        { order.length<1 ?<div className='text-center text-xl font-semibold  py-3 '>
            Nothing to show
        </div> :<div className='mt-7 px-3'>
            <div className='bg-blue-600 rounded text-white w-fit px-1 text-xl cursor-pointer'>Serve Me</div>
            <table className='w-full mt-3 rounded-md overflow-hidden text-xl'>
                <thead>
                    <tr className='bg-slate-600 text-white h-10'>
                        <th className='border'>chbox</th>
                        <th className='border'>item</th>
                        <th className='border'>Rate</th>
                        <th className='border'>Qty</th>
                        <th className='border'>Amt.</th>
                        <th className='border'>Status</th>
                        <th className='border'>Ord. Time</th>
                        <th className='border'>Max Serve Time</th>
                        <th className='border'>Opt</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map((item)=>{
                            return <Orderrow key={item.id} item={item} />
                        })
                    }
                    
                </tbody>
            </table>
        </div>}
    </div>
  )
}

export default Todaysorder