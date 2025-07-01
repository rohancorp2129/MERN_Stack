import React, { useEffect, useRef, useState } from 'react';

const CounterWithTimer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); 

  const startCount = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1); 
    }, 1000);
  };

  const stopCount = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetCount = () => {
    setCount(0);
    stopCount(); 
  };

  // Cleanup
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>1: Counter with Timer (Hooks + Lifecycle)</h2>
        <h1>Timer: {count}</h1>
        <button onClick={startCount}>Start</button>
        <button onClick={stopCount}>Stop</button>
        <button onClick={resetCount}>Reset</button>
    </div>
    );

};

export default CounterWithTimer;
