import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DECREMENT, INCREMENT } from "../../redux/actionTypes";
import {
  changeProductQuantity,
  removeProductFromCart,
} from "../../redux/action";

const CheckoutCard = (props) => {
  const { imgofproduct, nameofproduct, price, quantity, _id } = props.cdata;
  const dispatch = useDispatch();
  const handleProductQuantity = (changetype, id) => {
    dispatch(changeProductQuantity(changetype, id));
  };
  const handleRemoveFromCart = (id) => {
    dispatch(removeProductFromCart(id));
  };
  const productpricewithquantity = parseFloat(quantity) * parseFloat(price);
  return (
    <Card className="my-3">
      <Row className="d-flex align-items-center">
        <Col md={4}>
          <Card.Img variant="top" src={imgofproduct} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{nameofproduct}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <div className=" d-flex justify-content-around">
              <Button
                variant="primary"
                onClick={() => handleProductQuantity(INCREMENT, _id)}
              >
                +
              </Button>

              <Card.Text>{quantity}</Card.Text>

              <Button
                variant="primary"
                onClick={() => handleProductQuantity(DECREMENT, _id)}
              >
                -
              </Button>
              <p>${productpricewithquantity}</p>
            </div>
          </Card.Body>
        </Col>
      </Row>
      <Button
        variant="warning"
        className="my-1"
        onClick={() => handleRemoveFromCart(_id)}
      >
        Remove from cart
      </Button>
    </Card>
  );
};

export default CheckoutCard;
