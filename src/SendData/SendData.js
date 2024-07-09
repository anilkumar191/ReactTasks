import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SendData.css";

const SendData = () => {
  const naviage = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [isValid, setIsValid] = useState(true);
  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(value));
  };
  const handleInput = (event) => {
    const value = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
    event.target.value = value.slice(0, 10); // Limit input to 10 digits
  };
  const GotonextScreen = () => {
    if (name === "" || email === "" || phonenumber === "" || gender === "") {
      alert("plz enter all deatils");
    } else {
      naviage("/receivardata", { state: { name, email, phonenumber, gender } });
    }
  };

  return (
    <div className="senddata">
      <div className="box">
        <h4>Sign up</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name"
          placeholder="Name"
        />
        <br></br>
        <input
        type="email"
        className="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        style={{ borderColor: isValid ? '#ccc' : 'red' }}
      />
      {!isValid && <p style={{ color: 'red',fontSize:"10px" }}>Please enter a valid email address.</p>}
        <br></br>
        {!isValid && (
          <p style={{ color: "red" }}>Please enter a valid email address.</p>
        )}
        <input
          value={phonenumber}
          pattern="[0-9]{0,10}"
          onChange={(e) => setPhoneNumber(e.target.value)}
          onInput={handleInput}
          className="phonenumber"
          maxLength={10}
          placeholder="Phone Number"
        />
        <br></br>
        <div className="selectgender">select gender :</div>
        <form id="form">
          <label>
            <input
              className="male"
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label>
            <input
              className="male"
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>

          <label>
            <input
              className="male"
              type="radio"
              value="Other"
              checked={gender === "Other"}
              onChange={(e) => setGender(e.target.value)}
            />
            Other
          </label>
        </form>
        <button className="button" onClick={GotonextScreen}>
          submit
        </button>
      </div>
    </div>
  );
};

export default SendData;
