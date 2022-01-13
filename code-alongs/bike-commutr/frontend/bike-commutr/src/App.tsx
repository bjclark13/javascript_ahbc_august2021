import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCommuteForm from './AddCommuteForm';
import CommuteList from './CommuteList';

function App() {
  return (
    <div className="App">
      <AddCommuteForm />
      <CommuteList />
    </div>
  );
}

export default App;
