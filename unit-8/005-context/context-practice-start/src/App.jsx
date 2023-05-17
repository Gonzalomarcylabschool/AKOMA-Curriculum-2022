import { createContext } from "react"



const MyContext = createContext();
function App() {
  const sharedData = "Hello, World"; //plain old data

  return (
    <MyContext.Provider value='Hello, World!' >
      <ComponentA />
    </MyContext.Provider>
  )
}

const ComponentB = () => {
  return(
    <MyContext.Consumer>
      {(data) => <div>{data}</div>}
    </MyContext.Consumer>
  )
}
const ComponentA = () => {
  return (
    <>
      <MyContext.Consumer>
        {(data) => <input placeholder={data}></input>}
      </MyContext.Consumer>
      <ComponentB />
    </>
  )
  
}

export default App
