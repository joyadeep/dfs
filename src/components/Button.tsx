import React from 'react'

interface Buttontype{
    name:string;
    color:string;
    font?:string;
    margin?:string;
    handleClick?:()=>void;
}
const Button:React.FC<Buttontype> = ({name,color,font,margin,handleClick}) => {
  return (
    <button onClick={handleClick} className={`py-1 px-1 text-sm w-fit text-white outline-none rounded
    sm:text-2xl sm:px-3
    ${color} ${font} ${margin}`}>{name}</button>
  )
}

export default Button