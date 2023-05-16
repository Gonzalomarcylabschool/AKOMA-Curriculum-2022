import React, { useRef } from 'react'; // import anything you need from react(or any other packages)

const UncontrolledForm = () => {// declare our component 
  //Hooks
  const inputRef = useRef(null);
//JS
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    console.log(`Input value: ${inputVal}`);
    // Do something with inputVal
  }
  console.log('U form has rendered')
//return JSX
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