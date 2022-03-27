import React from 'react'
import Quantity from './Quantity'
import foods from '../api/fooditem';
import Button from './Button';
const MenuList:React.FC = () => {
  return (
    <>
        <div className='w-full h-fit pb-7'>
        <table className='table-fixed text-left w-full border-collapse rounded-md overflow-hidden'>
          <thead className='text-white'>
            <tr className='text-md  bg-gray-800 '>
              <th className='py-3 pl-4 min-w-fit '>Item</th>
              <th className=' px-4 w-40'>Img</th>
              <th className=' px-4 w-44'>Available Time</th>
              <th className=' px-4 w-24'>Rate</th>
              <th className=' px-4 w-24'>Initial</th>
              <th className=' px-4 w-24'>Available</th>
              <th className=' px-4 w-32'>Quantity</th>
              <th className=' px-4 w-24'>Price</th>

            </tr>
          </thead>
          <tbody className='text-xl text-white'>

            {
              foods.map((item)=>{
                return(
                  <tr className='even:bg-slate-400 odd:bg-slate-500 cursor-pointer transition-all duration-200 hover:scale-[1.01]  ' key={item.id}>
                  <td className='py-2 pl-4 text-left w-60'>{item.name}</td>
                  <td className='pl-4'> <img className='w-24 h-16 overflow-hidden object-cover rounded-sm my-1' src={item.image}/> </td>
                  <td className='pl-4'> {item.availableTime} </td>
                  <td className='pl-4'> {item.rate} </td>
                  <td className='pl-4'> {item.initialQty}</td>
                  <td className='px-4'>{item.availableQty}</td>
                  <td className='text-center font-serif'><Quantity/></td>
                  <td className='pl-4'>{item.price}</td>
                </tr>  
                )
              })
            }


          </tbody>
          </table>
          <div className='text-right pr-5 mt-5'>
            <Button name="Order" color="bg-blue-400" font="text-2xl" />
          </div>  
        </div>
    </>
  )
}

export default MenuList
