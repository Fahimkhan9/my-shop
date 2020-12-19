import "./App.css";
import Food from "./components/Home/Food";
import Navigation from "./components/Shared/Navigation";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Product from "./components/product/Product";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/payment/Payment";
function App() {
  const cartdata = useSelector((state) => state.productReducer.cart);

  return (
    <Router>
      <Navigation />
      <Link to="/checkout">
        <Button className="p-4 btn-fixed-bottom-left">
          Cart{cartdata.length}
        </Button>
      </Link>

      <Switch>
        <Route exact path="/">
          <Food />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path='/payment'>
         <Payment/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
