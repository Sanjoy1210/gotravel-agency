import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllBooking from '../AllBooking/AllBooking';

const ManageAllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [pending, setPending] = useState(bookings.length);
  const [approved, setApproved] = useState(0);

  useEffect(() => {
    const loadAllBooking = async () => {
      const result = await axios('https://mysterious-scrubland-36243.herokuapp.com/allbooking');
      setBookings(result.data);
    }

    loadAllBooking().catch(console.dir);
  }, [isUpdate])

  const handleRemoveBooking = async (id) => {
    const processed = window.confirm('are u sure u want to delete?');
    if (processed) {
      const result = await axios.delete(`https://mysterious-scrubland-36243.herokuapp.com/allbooking/${id}`);
      if (result.data.deletedCount) {
        alert('deleted successfully');
      }
      const newBooking = bookings.filter(booking => booking._id !== id);
      setBookings(newBooking);
    }
  }

  const updateBookingStatus = async (id) => {
    const updateBooking = bookings.find(booking => booking._id == id);
    updateBooking.status = 'approved';
    const result = await axios.put(`https://mysterious-scrubland-36243.herokuapp.com/booking/${id}`, updateBooking);
    if (result.data.modifiedCount) {
      setPending(pending - 1);
      setApproved(approved + 1);
      setIsUpdate(true);
    }
  }

  // if (approved == 0) {
  //   setPending(bookings.length);
  // }


  return (
    <div className="my-5">
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
              <h3>Pending Booking</h3>
              <h1>{pending}</h1>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className="upcoming-plan bg-danger p-4 text-center">
              <h3>Approved Booking</h3>
              <h1>{approved}</h1>
            </div>
          </Col>
        </Row>

        <div className="my-5">
          {
            bookings.map(booking => <AllBooking
              key={booking._id}
              booking={booking}
              handleRemoveBooking={handleRemoveBooking}
              updateBookingStatus={updateBookingStatus}
            ></AllBooking>)
          }
        </div>
      </Container>
    </div>
  );
};

export default ManageAllBookings;