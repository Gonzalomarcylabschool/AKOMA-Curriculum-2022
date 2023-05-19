import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return <h1>Product {id}</h1>;
};

const Dashboard = () => <h1>Dashboard</h1>;
const About = () => <h1>About</h1>;
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

const NotFound = () => <h1>Not Found</h1>;

function App() {
  return (
    <>
     <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
          {/* <Route path="create" element={<CreateProduct />} /> */}
        </Route>
        
        {/* <Route path="/products/:id" element={<Product />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;