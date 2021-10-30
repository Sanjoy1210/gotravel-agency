import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Booking from '../Booking/Booking';
import './MyBookings.css';

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadBooking = async () => {
      const result = await axios('http://localhost:5000/allbooking');
      console.log(result.data);
      if (result.data) {
        const userBookings = result.data.filter(book => book.email == user.email);
        console.log(userBookings);
        setBookings(userBookings);
      }
    }

    console.log(bookings);
    loadBooking().catch(console.dir);
  }, [])

  const handleRemoveBooking = async (id) => {
    const processed = window.confirm('are u sure u want to delete?');
    if (processed) {
      const result = await axios.delete(`http://localhost:5000/allbooking/${id}`);
      if (result.data.deletedCount) {
        alert('deleted successfully')
      }
      const newBooking = bookings.filter(booking => booking._id !== id);
      setBookings(newBooking);
    }
  }

  return (
    <div className="mybooking-area my-5">
      <div className="mybooking-wrapper">
        <Container>
          <div className="user-profile">
            <Row>
              <Col sm={12} md={3}>
                <div className="user-image">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </Col>
              <Col sm={12} md={9}>
                <div className="user-details mt-4">
                  <div className="d-flex justify-content-between">
                    <h5>{user.displayName}</h5>
                    <Button variant="success">Send me a message</Button>{' '}
                  </div>
                  <p>Email: {user.email}</p>
                  <p>Mobile: {bookings[0]?.phone}</p>
                  <p>Address: {bookings[0]?.address}</p>
                </div>
              </Col>
            </Row>
          </div>

          <Row className="g-4">
            {
              bookings.map(booking => <Booking
                key={booking._id}
                booking={booking}
                handleRemoveBooking={handleRemoveBooking}
              ></Booking>)
            }
          </Row>
          {/* <Row>
            <Col sm={12} md={6} lg={9}>
              <Row>
                {
                  bookings.map(booking => <Booking
                    key={booking._id}
                    booking={booking}
                    handleRemoveBooking={handleRemoveBooking}
                  ></Booking>)
                }
              </Row>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <div className="user-profile">
                <div className="user-image">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
                <div className="user-details mt-4">
                  <h5>{user.displayName}</h5>
                  <p>Email: {user.email}</p>
                  <p>Mobile: {bookings[0]?.phone}</p>
                  <p>Address: {bookings[0]?.address}</p>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </div>
  );
};

export default MyBookings;