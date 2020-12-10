import { Card, Button } from "react-bootstrap";

const FoodCard = (props) => {
  console.log(props);
  const { category, nameofproduct, desoproduct, imgofproduct } = props.pdata;
  return (
    <Card className="text-center border-0 my-2 product-card">
      <Card.Img variant="top" src={imgofproduct} alt="product-image" />
      <Card.Body>
        <Card.Title>{nameofproduct}</Card.Title>
        <Card.Text>{desoproduct}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
