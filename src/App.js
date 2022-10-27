import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Backg from "./components/Backg";

function App() {
  const [Background, setBackground] = React.useState("#fff");
  const addBackgroundHandler = (val) => {
    console.log(val);
    setBackground(val);
  };

  const removeBackgroundHandler = () => {
    setBackground("#fff");
  };

  return (
    <div className="App">
      <Backg onAddBackground={addBackgroundHandler} />
      <Card Bg={Background} />
    </div>
  );
}

export default App;
