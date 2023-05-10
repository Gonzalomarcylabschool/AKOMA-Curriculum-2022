import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment} className='btn btn-info'>Increment</button>
      <button onClick={decrement} className='btn btn-info'>Decrement</button>
    </div>
  );
}

export default Counter;
