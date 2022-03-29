import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import Button from './Button';
import {Link} from 'react-router-dom'


const schema=yup.object({
    email:yup.string().email("enter valid email").required("email field cannot be empty"),
    password:yup.string().required("password field cannot be empty")
})



const Login:React.FC = () => {


    interface Logintype{
        email:string;
        password:string;
    }
    const [login,setLogin]=useState<Logintype>({email:"",password:""})
   


    const {register,handleSubmit,reset, formState:{errors}}=useForm<Logintype>({
        resolver:yupResolver(schema),mode:'onSubmit'
      });

      const submitEvent=handleSubmit((data):void=>{
        setLogin({email: data.email,password: data.password});
        reset();        
      })



  return (
    <>
        <div className='w-full h-screen bg-slate-100 mt-20   flex  justify-center  sm:h-fit sm:mt-16 sm:items-center'>

            <div className='w-11/12 h-fit bg-white shadow-lg border border-gray-200 px-2 py-5 text-center rounded-lg md:w-1/3  '>
                <img src='./assets/logo.png' alt='deerwalk foodsystem logo' className=' mx-auto'/>
                <form onSubmit={submitEvent} className='flex flex-col w-10/12 mx-auto  mt-10 ' >

                    <input  className={errors.email?"border-2 border-red-500 h-12 pl-5  outline-none rounded text-xl":"border border-slate-300 h-12 pl-5  outline-none rounded text-xl"} placeholder="Email" type="text" {...register("email")}/>
                    <small className=' h-5 text-left text-red-600 pl-4 mt-0 mb-2 '>{errors.email?.message}</small> 

                    <input  className={errors.password?"border-2 border-red-500 h-12 pl-5 outline-none rounded text-xl":"border border-slate-300 h-12 pl-5 outline-none rounded text-xl"} placeholder="Password" type="password" {...register("password")}/>
                    <small className=' h-5 text-left text-red-600 pl-4 mt-0 mb-5'>{errors.password?.message}</small> 

                    <Button name="Login" color="bg-green-700" font="text-2xl" margin="mx-auto" />
                   </form>

                <Link to="/resetpw">    
                <div className='text-xl mt-5 text-blue-400 hover:text-blue-500 cursor-pointer'>
                    forgot password ?
                </div>
                </Link>

                <div className='text-md w-8/12 text-center mx-auto mt-5'>
                    <div className=''>
                    for support, email to deerwalkfoods@deerwalk.com
                    </div>
                    <div className='mt-4 font-semibold'>
                        DFS v 5.4.3 © 2022
                    </div>
                </div>
              {/* <h1>
                  email : {login.email} <br />
                  password:{login.password}
                  </h1>  */}
            </div>

        </div>
    </>
  )
}

export default Login