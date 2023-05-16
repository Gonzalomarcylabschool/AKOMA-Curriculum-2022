import { createContext, useContext, useState } from 'react';
// Create a Context
const UserContext = createContext();

// Step 1: Collect User Name
function Step1() {
  const { name, setName } = useContext(UserContext);

  return (
    <div>
      <h2>Step 1</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button>Next</button>
    </div>
  );
}

// Step 2: Collect User Email
function Step2() {
  const { email, setEmail } = useContext(UserContext);

  return (
    <>
      <h2>Step 2</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button>Next</button>
    </>
  );
}

// Step 3: Display User Summary
function Step3() {
  const { name, email } = useContext(UserContext);

  return (
    <div>
      <h2>Step 3: Summary</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Parent component that provides UserContext
function MultiStepForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <UserContext.Provider value={{ name, email, setName, setEmail }}>
      <Step1 />
      <Step2 />
      <Step3 />
    </UserContext.Provider>
  );
}
 export default MultiStepForm;