import React, {useState} from "./react";

function EyesOnMe(){
  function handleFocusEvent (){
    console.log("Good!")
  }
  function handleFocusBlur (){
    console.log("Hey! Eyes on me!")
  }

  return(
    <button onfocus = {handleFocusEvent} onBlur = {handleFocusBlur}>'Eyes on me'</button>
  );
}

export default EyesOnMe;




