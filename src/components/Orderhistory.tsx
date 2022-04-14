import React from 'react'
import Todaysorder from './Todaysorder'

const Orderhistory = () => {
  return (
    <div className='w-11/12 mx-auto h-fit rounded-sm my-10'>
        <Todaysorder title="Today's Order" />
        <Todaysorder title="Expired Item"/>
        </div>
  )
}

export default Orderhistory