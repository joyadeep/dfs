import React, { useState } from 'react'
import Categorybtns from '../components/Categorybtns'
import MenuList from '../components/MenuList'


const Menu = () => {

 const[fitlerType,setFilterType]=useState<string>("all_time")
  return (
    <>
        <div className='w-[97%] h-fit mx-auto sm:w-11/12 '>
            <Categorybtns setFilterType={setFilterType} />
            <MenuList filterType={fitlerType} />

        </div>

    </>
  )
}

export default Menu