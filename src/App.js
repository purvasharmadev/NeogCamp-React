import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smile",
  "😔": "Sad",
  "😕": "Confused",
  "😍": "In love",
  "😒": "unamused face",
  "😭": "Crying"
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInterpret(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    // console.log(meaning);
    if (meaning === undefined) {
      meaning = "we don't have this is our database!";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outt</h1>
      <input onChange={emojiInterpret} />
      <h2> {meaning} </h2>
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 */
