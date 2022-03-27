import React from 'react'
import Categorybtns from '../components/Categorybtns'
import MenuList from '../components/MenuList'
import Quantity from '../components/Quantity'

const Menu = () => {
  return (
    <>
        <div className='w-11/12 h-fit mx-auto '>
            <Categorybtns/>
            <MenuList/>

        </div>

    </>
  )
}

export default Menu