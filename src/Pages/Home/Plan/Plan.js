import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Plan.css';

const Plan = ({ plan }) => {
  const { planTitle, description, imageUrl, _id } = plan;

  return (
    <Col sm={12} md={4} lg={3}>
      <div className="plan">
        <Card>
          <div className="plan-thumbnail">
            <Card.Img variant="top" src={imageUrl} />
          </div>
          <Card.Body>
            <Card.Title>{planTitle}</Card.Title>
            <Card.Text>
              {description.slice(0, 50)}
            </Card.Text>
            <Button as={Link} to={`/placebooking/${_id}`} variant="warning">Book now</Button>{' '}
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Plan;