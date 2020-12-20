import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CheckoutCard from "./CheckoutCard";
import {Link} from 'react-router-dom'
const Checkout = () => {
  const cart = useSelector((state) => state.productReducer.cart);
  // console.log(cart);

  let producttotal =  0 
  let deliveryfee = 5

  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    producttotal  =  producttotal + product.price * product.quantity || 1
    
    
  }
  if(producttotal >= 20){
    deliveryfee = 0
  }
  let total = producttotal + deliveryfee
  return (
    <div className='pt-5'>
      <Container>
        <Row className='d-flex align-items-center'>
          <Col md={6}>
            {cart.map((cdata) => (
              <CheckoutCard key={cdata._id} cdata={cdata} />
            ))}
          </Col>
          <Col md={6}>
            <ListGroup>
              <ListGroup.Item className='d-flex justify-content-between'>
                <span >Product Total </span>
                <span >${producttotal} </span>

              </ListGroup.Item>
              <ListGroup.Item className='d-flex justify-content-between'>
                <span >Delivery Fee </span>
                <span >${deliveryfee} </span>

              </ListGroup.Item>
              <ListGroup.Item className='d-flex justify-content-between'>
                <span > Total </span>
                <span >${total} </span>

              </ListGroup.Item>
       
            </ListGroup>
            <Link to='/payment'>
            <Button variant='primary' block className='mt-2'>Go To Payment</Button>
            </Link>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
