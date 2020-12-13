import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CheckoutCard from "./CheckoutCard";

const Checkout = () => {
  const cart = useSelector((state) => state.productReducer.cart);
  console.log(cart);
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            {cart.map((cdata) => (
              <CheckoutCard cdata={cdata} />
            ))}
          </Col>
          <Col md={6}>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
