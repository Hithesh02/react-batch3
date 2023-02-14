import React from "react";
import "./App.css";
import Demo from "./components/Demo";

function App() { 
  const x = 9;
  var text;

  if (x === 10) {
    text = "Equal";
  } else {
    text = "Not equal";
  }

  return (
    <div>
      <h1 className="demo">Hello world</h1>
      <p style={{backgroundColor: "black", color: "white", fontSize: "35px"}}>{50 + 5}</p>
      <h2>{text}</h2>

      <h3>{x >= 10 ? "x is greater than or equal to 10": "No match"}</h3>

      <Demo para={x} />
      
    </div>
  );
}

export default App;
