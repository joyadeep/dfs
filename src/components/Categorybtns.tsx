import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import {food} from '../interfaces/foodInterface'
import {useSelector} from 'react-redux'
import { RootState } from '../app/store'

type FilterProp={
  setFilterFood:React.Dispatch<React.SetStateAction<food[]>>
}

const Categorybtns:React.FC<FilterProp> = ({setFilterFood}) => {
  const foodlist=useSelector((state:RootState)=>state.foodlist.foodlist);

  const [flist,setFlist]=useState(foodlist);
  useEffect(()=>{
    setFilterFood(flist);
  },[flist,setFilterFood])
  
  const searchfoodRef=useRef<HTMLInputElement | null>(null);


  const handleSearch=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    const search= (searchfoodRef.current as HTMLInputElement).value;
    const refinedSearch=search.toLowerCase();
    setFilterFood(flist.filter((item)=>item.name===refinedSearch || item.name.includes(refinedSearch)));
    (searchfoodRef.current as HTMLInputElement).value="";
  }

  const buttonClicked=(name:string)=>{
      if(name==='all_time'){
        setFilterFood(flist);
      }
      else{

        const filteredData=flist.filter((food)=>food.category===name);
        setFilterFood(filteredData);
         
      }

  }

  return (
    <div className='px-3 w-full  mx-auto h-11 sm:w-full  flex items-center sticky top-0 py-7 mb-10    backdrop-blur-sm  text-white text-xl justify-between '>
        <div className=' w-fit h-fit'>
          <input type="text"  name="searchtext" ref={searchfoodRef} placeholder='search food ...' className='border-l-2 border-y-2 border-orange-400 text-black outline-none w-72 h-12 text-2xl  pl-4 rounded-l-md ' />
          <span><button onClick={(e)=>{handleSearch(e)}} className='bg-[#e68b64] text-2xl h-12 px-2 rounded-r-md'>Search</button></span>
        </div>

        <div className='space-x-2 pl-2  overflow-x-scroll flex  overflow-y-hidden    sm:space-x-2 sm:overflow-hidden  sm:h-auto  '>
          <Button name="All Time" handleClick={()=>{buttonClicked("all_time")}}  color="bg-[#f57d49]"/>
          <Button name="Breakfast" handleClick={()=>{buttonClicked("breakfast")}}  color="bg-[#f57d49]"/>
          <Button name="Lunch" handleClick={()=>{buttonClicked("lunch")}} color="bg-[#f57d49]"/>
          <Button name="Snacks" handleClick={()=>{buttonClicked("snacks")}} color="bg-[#f57d49]"/>
          <Button name="Dinner" handleClick={()=>{buttonClicked("dinner")}}  color="bg-[#f57d49]"/>
          <Button name="Drinks" handleClick={()=>{buttonClicked("drinks")}} color="bg-[#f57d49]" />
        </div>

    </div>
  )
}

export default Categorybtns