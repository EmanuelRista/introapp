import React from 'react';
import './App.css';
import Clock from './Clock';
import Counter from './Counter'

function App() {
  return (
    <>
      <div className="App">
        <h1>My first react App</h1>
      </div>
      <Clock show country="Italy" timezone="2" />
      <Clock show country="Cuba" timezone="-6" />
      <Counter />
    </>
  );
}

export default App;
