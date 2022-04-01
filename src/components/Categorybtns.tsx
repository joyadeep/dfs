import React, { useRef } from 'react'
import Button from './Button'

type FilterProp={
  setFilterType: React.Dispatch<React.SetStateAction<string>>
}

const Categorybtns:React.FC<FilterProp> = ({setFilterType}) => {
  const searchfoodRef=useRef<HTMLInputElement | null>(null);

  const handleSearch=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    const search= (searchfoodRef.current as HTMLInputElement).value;
    search && setFilterType(search);
    (searchfoodRef.current as HTMLInputElement).value="";
  }

  const buttonClicked=(name:string)=>{
      setFilterType(name);
  }

  return (
    <div className=' w-full  mx-auto h-11 sm:w-full  flex items-center sticky top-0 py-7 mb-10  backdrop-blur-sm  text-white text-xl justify-between '>
        <div className=' w-fit h-fit'>
          <input type="text"  name="searchtext" ref={searchfoodRef} placeholder='search food ...' className='border-l-2 border-y-2 border-slate-300 text-black outline-none w-72 h-12 text-2xl  pl-4 rounded-l-md ' />
          <span><button onClick={(e)=>{handleSearch(e)}} className='bg-sky-400 text-2xl h-12 px-2 rounded-r-md'>Search</button></span>
        </div>

        <div className='space-x-2 pl-2  overflow-x-scroll flex  overflow-y-hidden    sm:space-x-2 sm:overflow-hidden  sm:h-auto  '>
          <Button name="All Time" handleClick={()=>{buttonClicked("all_time")}}  color="bg-purple-400"/>
          <Button name="Breakfast" handleClick={()=>{buttonClicked("breakfast")}}  color="bg-purple-400"/>
          <Button name="Lunch" handleClick={()=>{buttonClicked("lunch")}} color="bg-purple-400"/>
          <Button name="Snacks" handleClick={()=>{buttonClicked("snacks")}} color="bg-purple-400"/>
          <Button name="Dinner" handleClick={()=>{buttonClicked("dinner")}}  color="bg-purple-400"/>
          <Button name="Drinks" handleClick={()=>{buttonClicked("drinks")}} color="bg-purple-400" />
        </div>

    </div>
  )
}

export default Categorybtns