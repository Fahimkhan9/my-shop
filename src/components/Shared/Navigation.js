import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import {Link}  from 'react-router-dom'
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
        <Link to='/signup'> <Button
    >Signup</Button></Link>
   
   <Link to='/signup'> <Button
    >Signup</Button></Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
