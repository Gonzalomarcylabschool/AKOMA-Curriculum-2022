import { useState } from 'react';
import Counter from './Counter'
import ToggleButton from './BoolButton'
import LikeButton from './LikeButton';
import LikeCount from './LikeCounter';
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Counter />
      <LikeButton count={count} setCount={setCount} />
      <LikeButton count={count} setCount={setCount} />
      <LikeButton count={count} setCount={setCount} />
      <LikeCount count={count} />
      <ToggleButton />
  
    </>
  )
}

export default App
