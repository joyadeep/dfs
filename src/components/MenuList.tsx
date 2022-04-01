import React,{useEffect, useState} from 'react'
import Quantity from './Quantity'
import Button from './Button';
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from '../app/store';
import {addFood} from '../features/food/foodSlice'

type FilterProp={
  filterType:string;
}

const MenuList:React.FC<FilterProp> = ({filterType}) => {

  
  const foodlist=useSelector((state:RootState)=>state.foodlist.foodlist);
  const dispatch=useDispatch();
  const [price,setPrice]=useState<number>(0);
  const placeOrder=()=>{
    alert("order placed")
  }
  useEffect(()=>{
    dispatch(addFood());
    
  },[dispatch])
  
  return (
    <>
        <div className='w-full h-fit pb-7'>
        <table className='table-fixed text-left w-full border-collapse rounded-md overflow-hidden'>
          <thead className='text-white'>
            <tr className='text-xs  sm:text-lg  bg-gray-800 '>
              <th className='pl-1 w-18 border  sm:py-3 sm:pl-4 sm:w-64 '>Item</th>
              <th className='pl-1 w-14 border sm:px-4 sm:w-32'>Img</th>
              <th className='pl-1 w-[70px] border sm:px-4 sm:w-44'>Available Time</th>
              <th className='pl-1 w-10 border sm:px-4 sm:w-24'>Rate</th>
              <th className='pl-1 w-8 border sm:px-4 sm:w-24'>Init. Qty</th>
              <th className='pl-[2px] w-8 border sm:px-4 sm:w-24'>Avail. Qty</th>
              <th className='pl-1 w-18 border sm:px-4 sm:w-32'>Quantity</th>
              <th className='pl-1 w-12  border sm:px-4 sm:w-24'>Price</th>

            </tr>
          </thead>
          <tbody className='text-xl text-white'>

 
{

  foodlist.filter((item)=>item.category===filterType || item.name===filterType ).map((food)=>{
    return(
      <tr className='text-xs sm:text-xl even:bg-slate-400 odd:bg-slate-500 cursor-pointer transition-all duration-200' key={food.id}>
                  <td className='border py-2 pl-1 sm:pl-4 text-left sm:w-60'>{food.name}</td>
                  <td className='border pl-0 sm:pl-4'> <img className='w-24 h-16 sm:w-28 overflow-hidden object-cover rounded-sm my-1' src={food.image} alt={food.name}/> </td>
                  <td className='border text-center sm:text-left sm:pl-4'> {food.availableTime} </td>
                  <td className='border pl-1 sm:pl-4'> {food.rate} </td>
                  <td className='border pl-1 sm:pl-4'> {food.initialQty}</td>
                  <td className='border pl-1 sm:px-4'>{food.availableQty}</td>
                  <td className='border text-center'><Quantity/></td>
                  <td className='border pl-2 sm:pl-4'>{price}</td>
                </tr>
    )
  })

}







            <tr className='text-white bg-gray-600'>
              <td className='border'></td>
              <td className='border'></td>
              <td className='border'></td>
              <td className='border'></td>
              <td className='border'>Filter Type</td>
              <td className='border'>{filterType}</td>
              <td className='text-center border text-lg sm:text-3xl '>total</td>
              <td className='border text-sm text-center sm:text-left sm:pl-4 sm:text-xl'>999.99</td>
            </tr>
  

          </tbody>
          </table>
          <div className='text-right pr-5 mt-5'>
            <Button handleClick={placeOrder} name="Place Order" color="bg-blue-400"  />
          </div>  
        </div>
    </>
  )
}

export default MenuList
