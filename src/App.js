import React, { useState } from "react";
import "./styles.css";

var text = "Welcome";
var userName = "NeoGrammer";
// var likeCounter = 0;

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeHandler() {
    // console.log("clicked!" + likeCounter);
    var NewlikeCounter = likeCounter + 1;
    setLikeCounter(NewlikeCounter);
  }
  console.log(likeCounter);
  return (
    <div className="App">
      <h1>
        {text} {userName}
      </h1>
      <button onClick={likeHandler}>Like</button> {likeCounter}
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 */
