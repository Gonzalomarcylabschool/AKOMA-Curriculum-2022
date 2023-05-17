import { useState, useEffect } from 'react'

const Header = ({ resourceType }) => {
  return (
    <h1>{resourceType}</h1>
  )
}
function App() {
  const [resourceType, setResourceType] =  useState('posts');
  // const [items, setItems] = useState([])

  useEffect (() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then (response => response.json ())
      .then(json => console.log(json))
    }, [resourceType ])

    return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button> 
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType( 'comments') }>Comments</button> 
      </div> 
      <Header resourceType={resourceType}/>
      {/* {items.map(item => { 
        return <pre>{JSON.stringify(item)} </pre>
      })} */}
    </>
  )
}

export default App
