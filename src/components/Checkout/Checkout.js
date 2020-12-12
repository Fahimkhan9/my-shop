import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.productReducer.cart);
  console.log(cart);
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            {/* {cartdata.map((cdata) => (
              <li>{cdata.price}</li>
            ))} */}
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
