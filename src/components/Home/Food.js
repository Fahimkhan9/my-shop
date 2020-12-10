import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadProductData } from "../../redux/reducers";
import FoodCard from "./FoodCard";

const Food = () => {
  const [category, setCategory] = useState("breakfast");
  const productData = useSelector((state) => state.productReducer.productdata);
  const cartdata = useSelector((state) => state.productReducer.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductData("breakfast"));
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadProductData(category));
  }, [category, dispatch]);
  return (
    <section className="food-section">
      <Container>
        <div className="category-nav ">
          <ul className="d-flex justify-content-center">
            <li>
              <button className="btn" onClick={() => setCategory("breakfast")}>
                Breakfast
              </button>
            </li>
            <li>
              <button className="btn" onClick={() => setCategory("lunch")}>
                Lunch
              </button>
            </li>
            <li>
              <button className="btn" onClick={() => setCategory("dinner")}>
                Dinner
              </button>
            </li>
          </ul>
        </div>
        <Row>
          {productData.map((pdata) => (
            <Col md={4}>
              <FoodCard pdata={pdata} key={pdata._id} />
            </Col>
          ))}
        </Row>

        <Button className="p-4 btn-fixed-bottom-left">
          Cart{cartdata.length}
        </Button>
      </Container>
    </section>
  );
};

export default Food;
