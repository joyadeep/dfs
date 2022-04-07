import React,{useState} from 'react'
import Button from './Button';
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from '../app/store';
import {food, order} from '../interfaces/foodInterface'
import Menulistrow from './Menulistrow';
import { updatePrice,resetPrice } from '../features/food/totalPriceSlice';
import { toast } from 'react-toastify';
type FilterProp={
  filterFood:food[];
}


const MenuList:React.FC<FilterProp> = ({filterFood}) => {
const [totalPrice,setTotalPrice]=useState<number>(0);
const [order,setOrder]=useState<order[]>([]);
  const total=useSelector((state:RootState)=>state.totalPrice.totalPrice)
  const dispatch=useDispatch();

  const placeOrder=()=>{
    toast.success("food ordered successfully")
    total!==0 && alert("food ordered successfully")
    // dispatch(setOrder(order));
    console.log(order)
    dispatch(resetPrice());
    // console.log(`total after reset : ${total}`);
    
    // TODO : update orderslice and toastify successful order
    // TODO : update foodlist (available quantity) also set price to 0
    
  }


  
  return (
    <>
    {
      console.log(order)
      
    }
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
 filterFood.map((food)=>{
    return(
                <Menulistrow key={food.id} order={order} setOrder={setOrder} availableQty={food.availableQty} totalPrice={totalPrice} setTotalPrice={setTotalPrice} food={food} />
          )
  })

}
            <tr className='text-white bg-gray-600'>
              <td className='border'></td>
              <td className='border'></td>
              <td className='border'></td>
              <td className='border'></td>
              <td className='border'></td>
              <td className='border'></td>
              <td className='text-center border text-lg sm:text-3xl '>total</td>
              <td className='border text-sm text-center sm:text-left sm:pl-4 sm:text-xl'>{total}</td>
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
