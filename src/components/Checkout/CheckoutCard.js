import { Button, Card, Col, Row } from "react-bootstrap";

const CheckoutCard = (props) => {
  const { imgofproduct, nameofproduct, price, quantity } = props.cdata;
  return (
    <Card>
      <Row className="d-flex align-items-center">
        <Col md={4}>
          <Card.Img variant="top" src={imgofproduct} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{nameofproduct}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <div className="quantity-div flex-column">
              <Button variant="primary">+</Button>

              <Card.Text>{quantity}</Card.Text>

              <Button variant="primary">-</Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CheckoutCard;
