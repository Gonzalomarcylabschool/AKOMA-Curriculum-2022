import { useState } from 'react'; //import what you need

const Counter = () => {//declare component 

  const [count, setCount] = useState(0); // destruct the use state

// add any JavaScript to make this work
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
//return JSX
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