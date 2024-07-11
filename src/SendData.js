import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SendData = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [mail, setMail] = useState("");
    const [gender, setGender] = useState();
    const GotonextScreen = () => {
      if (name === "" || mail === "" || number === "" || gender === "") {
        alert("plz enter all deatils");
      } else {
        navigate("/receivedata", { state: { name, mail, number, gender } });
      }
    };

    return (
      
      <div class="h-screen flex items-center justify-center">
        
        <div class="flex items-center justify-center flex-col bg-gray-400 box-border h-40% w-120 p-4 border-4">
          <h3 className="text-5lg">Sign Up</h3>
          <input
            className="border-2 mx-1 my-1 w-60 h-8"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <br></br>
          <input
            className="border-2 mx-1 my-1  w-60 h-8"
            type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            placeholder="Mobile Number"
          />
          <br></br>
          <input
            className="border-2 mx-1 my-1  w-60 h-8"
            type="email"
            value={mail}
            onChange={(e)=>setMail(e.target.value)}
            placeholder="Email"
          />
          <h6 className="self-start ml-2">select gender:</h6>
          <form>
            <label className="text-lg">
              <input
              className="w-4 h-4 border-2"
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label className="mx-2 text-lg">
              <input
              className="w-4 h-4 border-2"
                type="radio"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label  className="text-lg">
              <input
               className="appearance w-4 h-4 border-2 border-blue-500 rounded-full"
                type="radio"
                value="Others"
                checked={gender === "Others"}
                onChange={(e) => setGender(e.target.value)}
              />
              Others
            </label>
          </form>
          <div className="flex items-center">
          <button onClick={GotonextScreen} className="h-8 w-30 mt-2 border-2 border-black rounded-xl px-1 text-yellow-300">submit</button>
          </div>
        </div>
      </div>
    );
}

export default SendData