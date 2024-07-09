import React from 'react';
import { useLocation } from 'react-router-dom';
import "./ReceivarData.css";

const ReceivarData = () => {
    const location = useLocation();
    const { name,email,phonenumber,gender } = location.state || {};
  return (
    <div className='receivardata'>
        
        <h3>Name is: {name}</h3><br></br>
        <h3>Email is: {email}</h3><br></br>
        <h3>PhoneNumber is: {phonenumber}</h3><br></br>
        <h3>gender is : {gender}</h3>

    </div>
  )
}

export default ReceivarData