import React, { useState } from 'react';// import what you need

const MyForm = () => {// declare component
  //hooks
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting form with name: ${name}, email: ${email}, and message: ${message}`);
  }
  console.log('my form has rendered')
  return (// return JSX
    <>
      <h1>This is my form</h1>
      <form onSubmit={handleSubmit}>
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
    </>
    
  );

}
export default MyForm