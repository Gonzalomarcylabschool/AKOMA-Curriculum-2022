/* JavaScript */
// const root = document.querySelector('#root');
// const h1 = document.createElement('h1');
// h1.innerText = 'Hello World';
// root.append(h1);

// const makeHeader = () => {
//   const h1 = document.createElement('h1');
//   h1.innerText = 'Hello World';
//   return h1;
// }

// const header1 = makeHeader();
// const header2 = makeHeader();
// const header3 = makeHeader();
// root.append(header1, header2, header3);



/* REACT */

import ReactDOM from 'react-dom/client'

// const Header = () => {
//   return (
//     <h1>Hello World</h1> //jsx
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <Header />
//     <Header />
//     <Header />
//   </>
// )

const NameHeader = (props) => {
  const { name, age } = props;
  console.log(props);
  return (
    <h1>Hello! My name is {name} and I'm {age}</h1>
  )
}

const App = () => {
  return (
    <>
      <NameHeader name="Gonzalo" age='2' />
      <NameHeader name="Laura" />
      <NameHeader name="Zo" />
    </>
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
 <App />
)