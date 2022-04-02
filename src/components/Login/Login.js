import React from "react";
import { Col, Container, Form, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import loginIcon from '../../images/Log.svg'
import uiImg from '../../images/draw2.svg'
import "./Login.css"

const Login = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sn={12} className='text-center mt-4 p-2' >
            <img className="icon-img" width="300" height="80" src={loginIcon} alt="icon"/>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" size="lg" type="submit">
                Login
              </Button>
              <div>
                <a href="#"><small className="reset"> Password Reset</small> </a>
                <a href="#"><small className="reset ml-2"> Quick Recover </small> </a>
              </div>
            </Form>
          </Col>
          <Col lg={8} md={6} sn={12}>
            <img className="w-100" src={uiImg} alt=""/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
