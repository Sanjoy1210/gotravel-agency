import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Hotel.css';

const Hotel = ({ hotel }) => {
  const { name, imageUrl, location, price } = hotel;
  return (
    <Col sm={12} md={6} lg={3}>
      <div className="hotel">
        <Card>
          <div className="hotel-thumbnail">
            <Card.Img variant="top" src={imageUrl} />
          </div>
          <Card.Body className="hotel-description">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <i className="fas fa-map-marker-alt"></i> {location}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <h3 className="mb-0">
                <i className="fas fa-dollar-sign"></i> {price}
              </h3>
              <Button variant="warning">See More</Button>{' '}
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Hotel;