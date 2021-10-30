import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Headers.css';

const Headers = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <>
      <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">GoTravel</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>

              {
                !user.email ?
                  <Button as={Link} to="/login" variant="primary">Log in</Button> :
                  <>
                    <Nav.Link as={Link} to="/mybookings">My Bookings</Nav.Link>
                    <Nav.Link as={Link} to="/manageallbookings">Manage All Bookings</Nav.Link>
                    <Nav.Link as={Link} to="/addplans">Add A New Plan</Nav.Link>
                    <span>{user.displayName}</span>
                    <span className="profile-pic"><img src={user.photoURL} alt="" style={{ width: "50px", height: "50px" }} /></span>
                    <Button onClick={logOut} variant="warning">Log out</Button>
                  </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;