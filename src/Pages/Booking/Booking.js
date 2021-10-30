import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './Booking.css';

const Booking = ({ booking, handleRemoveBooking }) => {
  const { _id, status, planTitle, date, imageUrl } = booking;

  return (

    <Col sm={12} md={12} lg={6}>
      <div className="user-booking">
        <img src={imageUrl} alt="" />
        <h3>{planTitle}</h3>
        <span className={status === "pending" ? "pending" : "approved"}><p>{status}</p></span>
        <p>{date}</p>
        <Button onClick={() => handleRemoveBooking(_id)} variant="warning">Cancel</Button>{' '}
      </div>
    </Col>
  );
};

export default Booking;