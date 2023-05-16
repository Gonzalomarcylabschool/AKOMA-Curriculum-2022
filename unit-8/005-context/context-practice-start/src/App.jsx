
import MyContext from "./MyContext";
import ComponentA from "./ComponetA";
function App() {
  const sharedData = "Hello, friends!";

  return (
    <>
      <MyContext.Provider value={sharedData}>
        <ComponentA />
      </MyContext.Provider>
    </>
  )
}

export default App
