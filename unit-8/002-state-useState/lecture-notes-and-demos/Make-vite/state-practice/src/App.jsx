// import { useState } from 'react'
import Counter from "./Counter"
import { useState } from "react";
import CounterButtons from "./CounterButtons";
import CounterDisplay from "./CounterDisplay";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter />
     <CounterButtons count={count} setCount={setCount} />
    <CounterDisplay count={count} />
    </>
  )
}

export default App
