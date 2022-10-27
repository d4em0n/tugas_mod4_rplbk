import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Backg from './components/Backg';
import Size from './components/Size';
import Show from './components/Show';

function App() {
  const [Background, setBackground] = React.useState('#fff');
  const [Height, setHeight] = React.useState('200px');
  const [Width, setWidth] = React.useState('200px');

  const addBackgroundHandler = (val) => {
    console.log(val);
    setBackground(val);
  };

  const addHeightHandler = (val) => {
    console.log(val);
    setHeight(val);
  };

  const addWidthHandler = (val) => {
    console.log(val);
    setWidth(val);
  };

  const removeBackgroundHandler = () => {
    setBackground('#fff');
  };

  return (
    <div className="App">
      <Backg onAddBackground={addBackgroundHandler} />
      <Size onAddSizeHeight={addHeightHandler} onAddSizeWidth={addWidthHandler} />
      <Card Bg={Background} sizeHeight={Height} sizeWidth={Width} />
      <Show />
    </div>
  );
}

export default App;
