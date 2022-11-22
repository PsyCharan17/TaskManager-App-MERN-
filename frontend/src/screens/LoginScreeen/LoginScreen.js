import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <MainScreen title="Login">
      <div className="loginContainer">
        <Form>
          <Form.Group
            controlId="formBasicEmail"
            style={{ marginBottom: "10px" }}
          >
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email"></Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New User? <Link to="/register">Register here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
