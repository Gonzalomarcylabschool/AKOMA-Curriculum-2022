import { useState, useEffect } from 'react'

const Header = ({ resourceType }) => {
  return (
    <h1>{resourceType}</h1>
  )
}
function App() {
  const [resourceType, setResourceType] =  useState('posts');
  const [items, setItems] = useState([])

  // useEffect (() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then (response => response.json ())
  //     .then(json => console.log(json))
  //   }, [resourceType ])

  //  useEffect (async () => {
  //   try {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [resourceType ]);

  useEffect(() => {
    async function useData(){
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    useData();
  }, [resourceType])

    return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button> 
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType( 'comments') }>Comments</button> 
      </div> 
      <Header resourceType={resourceType}/>
      {items.map(item => { 
        return <pre>{JSON.stringify(item)} </pre>
      })}
    </>
  )
}

export default App
