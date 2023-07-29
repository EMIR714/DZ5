import React from 'react';
import { CounterProvider } from './Components/CounterContext';
import CounterDisplay from './Components/CounterDisplay';
import CounterControls from './Components/CounterControls';
import './App.css';


const App = () => {
  return (
    <CounterProvider>
      <div className="app-container">
        <h1>Счетчик кликов</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  );
};

export default App;
