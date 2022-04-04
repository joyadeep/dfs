import React from 'react'
import {Navigate} from 'react-router-dom'
type ChangePwType={
  isLoggedIn:boolean
}

const ChangePw:React.FC<ChangePwType> = ({isLoggedIn}) => {
  return (
    <>
    {
      !isLoggedIn?<Navigate to="/" />:<div>Change password</div>
    }
    </>
    
  )
}

export default ChangePw