import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './AllBooking.css';

const AllBooking = ({ booking, handleRemoveBooking, updateBookingStatus }) => {
  const { _id, status, planTitle, imageUrl, name, phone, date } = booking;

  return (
    <div>
      <Col>
        <div className="all-booking">
          <div className="booking-img">
            <img src={imageUrl} alt="" />
            <h3>{planTitle}</h3>
            <span className={status === "pending" ? "pending" : "approved"}><p>{status}</p></span>
          </div>
          <div className="info">
            <p>{name}</p>
            <p>{phone}</p>
            <p>{date}</p>
          </div>
          <div className="buttons">
            <Button onClick={() => handleRemoveBooking(_id)} variant="warning">Cancel</Button>{' '}
            <Button onClick={() => updateBookingStatus(_id)} variant="success">Update</Button>{' '}
          </div>
        </div>
      </Col>
    </div>
  );
};

export default AllBooking;