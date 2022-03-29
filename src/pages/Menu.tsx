import React, { useEffect, useState } from 'react'
import Categorybtns from '../components/Categorybtns'
import MenuList from '../components/MenuList'
import {useSelector,useDispatch} from 'react-redux';
import {addFood,removeFood} from '../features/food/foodSlice'
import {food} from '../interfaces/foodInterface'

const Menu = () => {
  const dispatch=useDispatch();
 
  useEffect(()=>{
    dispatch(addFood());
    console.log("dispatched")
  },[dispatch])


  return (
    <>
        <div className='w-[97%] h-fit mx-auto sm:w-11/12 '>
            <Categorybtns/>
            <MenuList/>

        </div>

    </>
  )
}

export default Menu