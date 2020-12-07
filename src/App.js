import React from "react";
import "./styles.css";

var text = "Welcome";
var userName = "NeoGrammer";
var likeCounter = 0;
export default function App() {
  function likeHandler() {
    console.log("clicked!" + likeCounter);
    likeCounter = likeCounter + 1;
  }
  return (
    <div className="App">
      <h1>
        {text} {userName}
      </h1>
      <button onClick={likeHandler}>Like</button>
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 */
