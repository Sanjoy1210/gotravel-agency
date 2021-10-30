import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllBooking from '../AllBooking/AllBooking';

const ManageAllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadAllBooking = async () => {
      const result = await axios('http://localhost:5000/allbooking');
      setBookings(result.data);
    }

    loadAllBooking().catch(console.dir);
  }, [])

  const handleRemoveBooking = async (id) => {
    const result = await axios.delete(`http://localhost:5000/allbooking/${id}`);
    if (result.data.deletedCount) {
      alert('deleted successfully')
    }
    const newBooking = bookings.filter(booking => booking._id !== id);
    setBookings(newBooking);
  }

  const updateBookingStatus = async (id) => {
    const updateBooking = bookings.find(booking => booking._id == id);
    updateBooking.status = 'approved';
    const result = await axios.put(`http://localhost:5000/booking/${id}`, updateBooking);
    console.log(result);
  }


  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <div className="total-plan bg-warning p-4 text-center">
              <h3>Total Plan</h3>
              <h1>{bookings.length}</h1>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className="booking-plan bg-success p-4 text-center">
              <h3>Total Plan</h3>
              <h1>{bookings.length}</h1>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className="upcoming-plan bg-danger p-4 text-center">
              <h3>Total Plan</h3>
              <h1>{bookings.length}</h1>
            </div>
          </Col>
        </Row>

        <Row>
          {
            bookings.map(booking => <AllBooking
              key={booking._id}
              booking={booking}
              handleRemoveBooking={handleRemoveBooking}
              updateBookingStatus={updateBookingStatus}
            ></AllBooking>)
          }
        </Row>
      </Container>
    </div>
  );
};

export default ManageAllBookings;