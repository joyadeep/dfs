import React from 'react'

interface IinputProps{
    type:string;
    placeholder:string;
    styles?:string;
    misc?:(e:any)=>void;
}

const InputField:React.FC<IinputProps> = ({type,placeholder,styles,misc}) => {
  return (
    <input type={type} onFocus={misc} placeholder={placeholder} className={`border w-full pr-3 border-slate-300 h-12 pl-5  outline-none rounded text-xl ${styles}`} />
  )
}

export default InputField