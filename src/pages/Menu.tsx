import React, { useState } from 'react'
import Categorybtns from '../components/Categorybtns'
import MenuList from '../components/MenuList'
import {Navigate} from 'react-router-dom';
import { food } from '../interfaces/foodInterface';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Orderhistory from '../components/Orderhistory';


const Menu:React.FC = () => {
  const isLoggedIn=useSelector((state:RootState)=>state.user.isLoggedIn)
 const [filterFood,setFilterFood]=useState<food[]>([]);
 const loginfo=sessionStorage.getItem("loggedin");  
  return (
    <>
    
    {!isLoggedIn?<Navigate to="/" replace/>:
     <div className='w-[97%] h-fit mx-auto sm:w-11/12 '>
     <Categorybtns setFilterFood={setFilterFood} />
     <MenuList  filterFood={filterFood} />
 </div>
    }
       <Orderhistory/>

    </>
  )
}

export default Menu