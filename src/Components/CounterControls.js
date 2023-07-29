import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const CounterControls = () => {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div className="counter-controls">
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
};

export default CounterControls;
