import React, { useState } from 'react';

  const ControlledForm = () => {// declare our component 
    //Hooks
    const [ input, setInput ] = useState('');
//JS
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Input value: ${input}`);
    // Do something with inputVal
  }
  console.log('C form has rendered')
//return JSX
  return (
    <>
      <h1>Controlled form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Input'>
          Input:
          <input type="text" onChange={(e) =>setInput( e.target.value)} />
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ControlledForm;