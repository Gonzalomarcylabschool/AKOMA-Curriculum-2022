import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link }from 'react-router-dom'
const Home = () => {
  return(
    <h1>Home</h1>
  )
}

const About = () => {
  return(
    <h1>About</h1>
  )
}
const Contacts = () => {
  return(
    <h1>Contacts</h1>
  )
}
const Products = () => {
  return(
    <>
      <h1>Products</h1>
      <ul>
      <li>
          <Link to="products/1">Product 1</Link>
        </li>
        <li>
          <Link to="products/2">Product 2</Link>
        </li>
        <li>
          <Link to="products/3">Product 3</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="products/" component={ProductList} />
        <Route path="products/:productId" component={ProductDetails} />
      </Switch>
    </>
   
  )
}

const ProductsDetails = () => {
  return (
    <h1>Products Details</h1>
  )
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About }></Route>
        <Route path="/contact" component={Contacts }></Route>
        <Route path="/products" component={Products }></Route>
        <Route path="/products/:productId" component={ProductsDetails}></Route>
      </Switch>
    </Router>
  )
}
export default App;