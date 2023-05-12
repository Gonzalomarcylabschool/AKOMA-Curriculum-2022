
import Counter from './Counter';
import UncontrolledForm from './UncontrolledFrom';
import ControlledForm from './ControlledForm';
import MyForm from './myForm';
const App = () => {
  console.log( 'App has rendered')
  return (
    <>
      <Counter />
      <UncontrolledForm />
      <ControlledForm />
      <MyForm />

    </>
   
  )
};

export default App
