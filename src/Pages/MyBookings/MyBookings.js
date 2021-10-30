import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Booking from '../Booking/Booking';

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
    const result = await axios.delete(`http://localhost:5000/allbooking/${id}`);
    if (result.data.deletedCount) {
      alert('deleted successfully')
    }
    const newBooking = bookings.filter(booking => booking._id !== id);
    setBookings(newBooking);
  }

  return (
    <div className="mybooking-area">
      <div className="mybooking-wrapper">
        <Container>
          <Row>
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
                <div className="user-details">
                  <h5>{user.displayName}</h5>
                  <p>{user.email}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyBookings;