import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history("/");
  };

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Link to="/">ToDo App</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>

          <Nav>
            <Nav.Link href="#home">
              <Link to="/mytasks">My Tasks</Link>
            </Nav.Link>
            <NavDropdown title="PsyCharan17" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
