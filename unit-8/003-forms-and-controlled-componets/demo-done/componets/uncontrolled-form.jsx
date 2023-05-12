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
