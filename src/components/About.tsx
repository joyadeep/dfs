import React, { useEffect } from 'react'

const About = () => {
  useEffect(()=>{
    console.log("about page visited")
  },[])
  return (
    <div className='text-3xl'>About</div>
  )
}

export default About