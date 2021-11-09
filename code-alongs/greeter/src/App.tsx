import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './Greeter';

function App() {
  // this inner workings of your app
  // starting place
  return (
    <div className="App">
      <h1>My App</h1>
      <Greeter startingName="BJ" />

      <Greeter startingName="Nick" />

      <Greeter startingName="Jason" />

      <Greeter startingName="Christian" />

      <Greeter startingName="Eugene" />

      <Greeter startingName="Sam" />
      
      <Greeter startingName="Jarod" />
    </div>
  );
}

export default App;
