import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action";

const FoodCard = (props) => {
  const dispatch = useDispatch();
  // console.log(props);
  const {
    category,
    nameofproduct,
    desoproduct,
    imgofproduct,
    price,
  } = props.pdata;
  props.pdata.quantity = 1;

  const handleaddtocart = () => {
    dispatch(addToCart(props.pdata));
  };
  return (
    <Card className="text-center border-0 my-2 product-card">
      <Card.Img variant="top" src={imgofproduct} alt="product-image" />
      <Card.Body>
        <Card.Title>{nameofproduct}</Card.Title>
        <Card.Text>{desoproduct}</Card.Text>
        <Card.Title>
          <b>${price}</b>
        </Card.Title>
        <Button onClick={handleaddtocart}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
