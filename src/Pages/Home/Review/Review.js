import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css';

const Review = ({ singleReview }) => {

  const { review, imageUrl, name, ratings } = singleReview;

  return (
    <Col sm={12} md={6} lg={3}>
      <div className="review">
        <Card>
          <div>
            <Card.Img variant="top" src={imageUrl} />
          </div>
          <Card.Body>
            <Card.Text>
              <Rating initialRating={ratings} emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color" readonly></Rating>
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