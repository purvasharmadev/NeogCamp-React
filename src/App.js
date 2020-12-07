import React from "react";
import "./styles.css";

var text = "Welcome";
var userName = "NeoGrammer";
export default function App() {
  return (
    <div className="App">
      <h1>
        {text} {userName}
      </h1>
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 */
