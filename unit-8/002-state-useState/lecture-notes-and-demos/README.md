## State (in react)

In a React project, 'state' is simply a JavaScript object that contains information that your app needs to render and function correctly.

Think of it like a container that holds important information about your app's current state, such as whether a button has been clicked, what text has been entered into a form, or what items are in a shopping cart.

When a component's state changes, React automatically re-renders the component to reflect the updated state with out needing to refresh the page.


## Hooks

if you see `use` you are working with a hook.

Hooks are a feature introduced in React 16.8 that allow developers to use state and other React features in functional components.

Hooks are functions that allow you to "hook into" React state and lifecycle features from functional components. There are several built-in hooks in React, such as useState, useEffect, and useContext,  among others.

An absolutely key concept for you to grasp is hooks rely on this strict ordering. As such, do not put hooks inside `if` statements or loops. If you do, you'll have insane bugs that involve `useState` returning the wrong state. If you see `useState` returning the wrong piece of state, this is likely what you did.

When using hooks in React, there are a few rules that you need to follow:

1. Hooks can only be called at the top level of your component or another custom hook.

2. Hooks should not be called conditionally, inside loops, or inside nested functions.

3. Hooks should always be called in the same order, every time your component is rendered.

## `useState`

In React, `useState` is a function that allows us to keep track of information that can change over time, like a number, a piece of text, or a boolean (true/false) value. We call this information "state".


The following is an example of how we can use state and the `useState Function to keep track of a counter.
```jsx
import React, { useState } from 'react'; // import react using ESM

const Counter = () => { // make your function
  const [count, setCount] = useState(0); // destruct the use state

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
```