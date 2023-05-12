# forms and Controlled components

In React, a controlled component is a component that has its state controlled by React instead of having its state managed internally by the component itself. In other words, the component's state is controlled by passing it down as props from a parent component, and any changes to the component's state are handled by calling a callback function also passed down as props.

## Uncontrolled vs Controlled

Here's a summary of the differences between controlled and uncontrolled components:

Controlled components:

* The parent component manages the state and passes it down to the child component as props.

* The child component cannot modify the state directly; it must notify the parent component of any state changes via callback props.

* The parent component is responsible for updating the state and re-rendering the child component when necessary.

* Controlled components are often used when you need to validate user input, implement complex behaviors based on user input, or synchronize multiple inputs.


Uncontrolled components:

* The component manages its own state internally.

* The component can modify its state directly in response to user interactions.

* The component can pass the value of the input element or other form element to a parent component via a callback prop.

* Uncontrolled components are often used when you need a simple form or when you need to integrate with non-React code.

## htmlFor

like `class`in javaScript, `for` is a reserved keyword used in loops. When you try to make a label, you need to `for` attribute. in place of this you will use the `htmlFor`


## Controlled 

```jsx
import React, { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log(`Submitting form with name: ${name}, email: ${email}, and message: ${message}`);
    }}>
      <label htmlFor='name'>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label htmlFor='email'>
        Email:
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label htmlFor='message'>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm
```

## e

We have used the DOM `e` before. When we learned about DOM we used `e.target`, or `e.preventDefault` etc. As you can see in our code we are using it as well but this is a fake DOM `e`.

## Uncontrolled

```jsx
import React, { useRef } from 'react';

const  UncontrolledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputVal = inputRef.current.value;
    console.log(`Input value: ${inputVal}`);
    // Do something with inputVal
  }

  return (
    <>
      <h1>Uncontrolled form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Input'>
          Input:
          <input type="text" ref={inputRef} />
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </>
    
  );
}

export default UncontrolledForm;

```