import "./App.css";
import Food from "./components/Home/Food";
import Navigation from "./components/Shared/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/product/Product";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
function App() {
  const cartdata = useSelector((state) => state.productReducer.cart);

  return (
    <Router>
      <Navigation />
      <Button className="p-4 btn-fixed-bottom-left">
        Cart{cartdata.length}
      </Button>

      <Switch>
        <Route exact path="/">
          <Food />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
