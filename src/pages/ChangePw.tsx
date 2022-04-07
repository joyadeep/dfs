import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'
import { RootState } from '../app/store'
import Changepwform from '../components/Changepwform'

const ChangePw:React.FC = () => {
const isLoggedIn=useSelector((state:RootState)=>state.user.isLoggedIn);
  return (
    <>
    {
      console.log(`inside change pw : ${isLoggedIn}`)
      
    }
    
    {
      !isLoggedIn?<Navigate to="/" />:<Changepwform/>
      
      
    }
    </>
    
  )
}

export default ChangePw