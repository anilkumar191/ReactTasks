import React from 'react'

import { useLocation } from 'react-router-dom';


const ReceiveData = () => {
  const location = useLocation();
  const { name,number,mail,gender } = location.state || {};
  return (
    <div class="h-screen flex flex-col items-center justify-center">
        <h1 className='text-purple-700 text-3xl'>your name is : {name}</h1><br></br>
        <h1 className='text-purple-700 text-3xl'>your mobile number is : {number}</h1><br></br>
        <h1 className='text-purple-700 text-3xl'>your Email is : {mail}</h1><br></br>
        <h1 className='text-purple-700 text-3xl'>your Gender is : {gender}</h1>
    </div>
  )
}

export default ReceiveData