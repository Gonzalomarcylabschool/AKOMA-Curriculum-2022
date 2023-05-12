import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('change this text');

const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <label>
        Enter some text:
        <input type="text" value={text} onChange={handleChange} />
      </label>
      <p>You entered: {text}</p>
    </div>
  );
}

export default TextInput