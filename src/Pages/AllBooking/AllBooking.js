import React from 'react';
import { Button, Col } from 'react-bootstrap';

const AllBooking = ({ booking, handleRemoveBooking, updateBookingStatus }) => {
  const { _id, status, planTitle } = booking;

  return (
    <div>
      <Col sm={12} md={6}>
        <div className="user-booking">
          <h3>{planTitle}</h3>
          <span className={status === "pending" ? "pending" : "approved"}><p>{status}</p></span>
          <Button onClick={() => handleRemoveBooking(_id)} variant="warning">Cancel</Button>{' '}
          <Button onClick={() => updateBookingStatus(_id)} variant="success">Update</Button>{' '}
        </div>
      </Col>
    </div>
  );
};

export default AllBooking;