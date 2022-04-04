import React, { useState } from 'react'
import Categorybtns from '../components/Categorybtns'
import MenuList from '../components/MenuList'
import {Navigate} from 'react-router-dom';
import { food } from '../interfaces/foodInterface';

type MenuProp={
  isLoggedIn:boolean;
}

const Menu:React.FC<MenuProp> = ({isLoggedIn}) => {
 const [filterFood,setFilterFood]=useState<food[]>([]);
  return (
    <>
    
    {!isLoggedIn?<Navigate to="/" replace/>:
     <div className='w-[97%] h-fit mx-auto sm:w-11/12 '>
     <Categorybtns setFilterFood={setFilterFood} />
     <MenuList  filterFood={filterFood} />
 </div>
    }
       

    </>
  )
}

export default Menu