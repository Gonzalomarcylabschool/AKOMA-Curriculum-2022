import React, { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');
  return (
    <>
      <h1>Controlled form</h1>
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
        <p>You entered: {text}</p>
      </form>
    </>
  );
}

export default MyForm