import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  return <div className="counter-display">Количество кликов: {count}</div>;
};

export default CounterDisplay;
