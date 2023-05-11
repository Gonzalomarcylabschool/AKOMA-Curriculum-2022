## htmlFor

like `class`in javaScript, `for` is a reserved keyword used in loops. When you try to make a label, you need to `for` attribute. in place of this you will use the `htmlFor`


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