import "./App.css"; //css for the page
import { Routes, Route, Link } from "react-router-dom"; //import Routes and Route help to navigate components

// Components
const Dashboard = () => <h1>Dashboard</h1>; 
const About = () => {
  console.log('about Refresh')
  return(
    <h1>About</h1>
  )
}

const CheckOut = () => <h1>Check Out</h1>;
const NotFound = () => <h1>Not Found</h1>;

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <li><Link to='/products/1'>Product 1</Link></li>
        <li><Link to='/products/2'>Product 2</Link></li>
        <li><Link to='/products/3'>Product 3</Link></li>
      </ul>
    </>
  )
}

function App() {
  console.log('refresh');
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/checkout">Check Out</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} ></Route>
          <Route path="create" element={<CreateProduct />} ></Route>
        </Route>
        <Route path="/products/id:" element={<Products />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Dashboard />
      <About /> 
      <Products /> */}
    </>
  );
}

export default App;
