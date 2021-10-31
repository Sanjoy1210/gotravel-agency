import React from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="footer-wrapper">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <h1>GoTravel</h1>
              <div className="contacts-info">
                <p>Life is a journey that must be traveled no matter how bad the roads and accommodations.</p>
                <p><i className="far fa-envelope"></i> hello@gotravel.com</p>
                <p><i className="fas fa-phone-alt"></i> +44 5346 338</p>
                <p><i className="fas fa-map-marker-alt"></i> 3 Edgar Buildings, England, BA1 2FJ.</p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="quick-links">
                <h2>Quick Links</h2>
                <div className="links">
                  <Link to="/home">Home</Link>
                  <Link to="/mybookings">My Booking</Link>
                  <Link to="/manageallbookings">Manage All Booking</Link>
                  <Link to="/addplans">Add Plans</Link>
                  <Link to="/login">Login</Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="others-page">
                <h2>Others page</h2>
                <div className="links">
                  <Link to="/">Privacy & Policy</Link>
                  <Link to="/">Terms of Use</Link>
                  <Link to="/">Disclaimer</Link>
                  <Link to="/">FAQ</Link>
                </div>
                <div className="socail-links">
                  <h2>Follow us:</h2>
                  <div className="icons">
                    <span><i className="fab fa-facebook-f"></i></span>
                    <span><i className="fab fa-twitter"></i></span>
                    <span><i className="fab fa-instagram"></i></span>
                    <span><i className="fab fa-youtube"></i></span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="title">
                <h2>Newsletter</h2>
                <hr />
              </div>
              <div className="newsletter-body">
                <p>Sign up with your name and email to get updates fresh updates.</p>
                <form>
                  <div className="mb-3">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-warning">Subscribe</button>
                </form>
              </div>
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