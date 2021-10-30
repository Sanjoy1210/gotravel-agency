import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Booking = ({ booking, handleRemoveBooking }) => {
  const { _id, status, planTitle } = booking;

  return (
    <Col sm={12} md={6}>
      <div className="user-booking">
        <h3>{planTitle}</h3>
        <p>{status}</p>
        <Button onClick={() => handleRemoveBooking(_id)} variant="warning">Cancel</Button>{' '}
      </div>
    </Col>
  );
};

export default Booking;