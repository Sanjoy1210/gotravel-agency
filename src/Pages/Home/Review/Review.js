import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Review.css';

const Review = ({ singleReview }) => {

  const { review, imageUrl, name, ratings } = singleReview;

  return (
    <Col sm={12} md={4} lg={3}>
      <div className="review">
        <Card>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Text>
              {ratings}
            </Card.Text>
            <Card.Text>
              {review}
            </Card.Text>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Review;