import React, {useState} from "react";

function Keypad() {

    
  function handleChange() {
    console.log("Entering password...")
  }

    return (
      <input type = "password" onChange={handleChange}></input>
    );
  }
  
  export default Keypad;
