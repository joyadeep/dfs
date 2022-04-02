import React from 'react'

interface Buttontype{
    name:string;
    color:string;
    font?:string;
    margin?:string;
    misc?:string;
    handleClick?:()=>void | string;
    btntype?: "button" | "submit" | "reset" | undefined;
}
const Button:React.FC<Buttontype> = ({name,color,font,margin,misc,handleClick}) => {
  return (
    <button  onClick={handleClick} className={`py-1 px-1 text-md w-fit text-white outline-none rounded
    sm:text-2xl sm:px-3
    ${color} ${font} ${margin} ${misc}`}>{name}</button>
  )
}

export default Button