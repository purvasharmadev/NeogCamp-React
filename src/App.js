import React, { useState } from "react";
import "./styles.css";

var text = "Welcome";
var userName = "NeoGrammer";
// var likeCounter = 0;

export default function App() {
  var [userInput, setUserInput] = useState("");
  function inputChangeHandler(event) {
    // console.log(event.target.value);
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>
        {text} {userName}
      </h1>
      <input onChange={inputChangeHandler}></input>
      <h3>You typed - {userInput} </h3>
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 */
