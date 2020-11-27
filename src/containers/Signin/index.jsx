import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { login } from '../../actions';
import { useDispatch } from "react-redux";

function Signin() {
  const dispatch = useDispatch();

  const userLogin = (e) => {

    e.preventDefault();

    const user = {
      email: 'vdt040499@gmail.com',
      password: '123456'
    }

    dispatch(login(user));
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Email"
                type="email"
                value=""
                onChange={() => {}}
              />

              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value=""
                onChange={() => {}}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signin;
