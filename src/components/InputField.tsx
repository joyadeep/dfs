import React from 'react'

interface IinputProps{
    type:string;
    placeholder:string;

}

const InputField:React.FC<IinputProps> = ({type,placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className='border w-full border-slate-300 h-12 pl-5  outline-none rounded text-xl' />
  )
}

export default InputField