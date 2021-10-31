import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Plan.css';

const Plan = ({ plan }) => {
  const { planTitle, description, imageUrl, _id, day, persons, ratings, price } = plan;

  return (
    <Col sm={12} md={6} lg={3}>
      <div className="plan">
        <Card>
          <div className="plan-thumbnail">
            <Card.Img variant="top" src={imageUrl} />
          </div>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title>{planTitle}</Card.Title>
              <Rating initialRating={ratings} emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>
            </div>
            <Card.Text>
              {description.slice(0, 100)}
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Card.Text>
                <i className="far fa-calendar-alt"></i> {day} days
              </Card.Text>
              <Card.Text>
                <i className="fas fa-user"></i> {persons} persons
              </Card.Text>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="mb-0">
                <i className="fas fa-dollar-sign"></i> {price}
              </h3>
              <Button as={Link} to={`/placebooking/${_id}`} variant="warning">Book now</Button>{' '}
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Plan;