"use client";

import { useState } from 'react';

const Counter = () => {
  // Initialize the counter state with a value of 0
  const [count, setCount] = useState<number>(0);

  // Increment the counter by 1
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement the counter by 1
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h2 className="text-xl font-semibold">Counter</h2>
      <div className="flex items-center space-x-4 mt-4">
        <button 
          onClick={decrement} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <span className="text-lg">{count}</span>
        <button 
          onClick={increment} 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
