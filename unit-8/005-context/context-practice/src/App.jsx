
import MyContext from "./Context/MyContext";
import ComponentA from "./Components/ComponetA";
import MultiStepForm from "./Components/MultiStepFrom";
function App() {
  const sharedData = "Hello, friends!";

  return (
    <>
      <MyContext.Provider value={sharedData}>
        <ComponentA />
      </MyContext.Provider>
      <MultiStepForm />
    </>
  )
}

export default App
