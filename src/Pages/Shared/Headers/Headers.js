import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

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
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/mybookings">My Bookings</Nav.Link>
              <Nav.Link as={Link} to="/manageallbookings">Manage All Bookings</Nav.Link>
              <Nav.Link as={Link} to="/addplans">Add A New Plan</Nav.Link>
              {
                !user.email ?
                  <Button as={Link} to="/login" variant="primary">Log in</Button> :
                  <>
                    <span>{user.displayName}</span>
                    <img src={user.photoURL} alt="" style={{ width: "50px", height: "50px" }} />
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