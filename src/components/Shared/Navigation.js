import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../../images/logo2.png";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="" className=" ml-5 nav_logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
