import React from 'react'

interface Buttontype{
    name:string;
    color:string;
    font?:string;
    margin?:string;
}
const Button:React.FC<Buttontype> = ({name,color,font,margin}) => {
  return (
    <button className={`py-1 px-3 w-fit text-white outline-none rounded ${color} ${font} ${margin}`}>{name}</button>
  )
}

export default Button