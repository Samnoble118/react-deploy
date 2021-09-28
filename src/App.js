import React from 'react';
import BirdPic from './img/Birds.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Sam Noble</h2>
      <img src={BirdPic} alt="a picture" />
    </div>
  );
}

export default App;
