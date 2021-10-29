import React from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="footer-wrapper">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <span>GoTravel</span>
              <ListGroup>
                <ListGroup.Item>hello@gotravel.com</ListGroup.Item>
                <ListGroup.Item>+44 5346 338</ListGroup.Item>
                <ListGroup.Item> 3 Edgar Buildings, England, BA1 2FJ.</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h2>Quick Links</h2>
              <ListGroup>
                <ListGroup.Item>Home</ListGroup.Item>
                <ListGroup.Item>My Orders</ListGroup.Item>
                <ListGroup.Item>Login</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h2>Important Links</h2>
              <ListGroup>
                <ListGroup.Item>Home</ListGroup.Item>
                <ListGroup.Item>My Orders</ListGroup.Item>
                <ListGroup.Item>Login</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h2>News Letter</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Subscribes
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <hr />
        <div className="copyright-content text-center">
          <p className="copyright-text">&copy; 2021 GoTravel Agency, All Rights Reserved. Designed By Sanjoy Paul</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;