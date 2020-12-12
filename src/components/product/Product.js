import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/action";

const Product = () => {
  const { id } = useParams();
  const productdata = useSelector((state) => state.productReducer.productdata);
  const dispatch = useDispatch();
  const findproduct = productdata.find((pdata) => pdata._id === id);
  const {
    category,
    nameofproduct,
    desoproduct,
    imgofproduct,
    price,
    _id,
  } = findproduct;
  const handleaddtocart = () => {
    dispatch(addToCart(findproduct));
  };
  return (
    <div className="pt-5">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6}>
            <h2>{nameofproduct}</h2>
            <p style={{ lineHeight: "2rem" }}>
              {desoproduct}
              Exercitationem adipisci eaque recusandae blanditiis magnam maiores
              expedita officia nemo inventore tempore. Nam quos magni sapiente
              laboriosam, quidem aspernatur earum dolore est mollitia ad sequi
              laudantium omnis? Obcaecati ipsa nihil voluptatem omnis
              repellendus, rem velit doloremque itaque reprehenderit veniam.
              Quibusdam, dolorum accusantium!
            </p>
            <h4>Price: {price}</h4>
            <Button onClick={handleaddtocart}>Add to Cart</Button>
          </Col>
          <Col md={6}>
            <img style={{ width: "100%" }} src={imgofproduct} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
