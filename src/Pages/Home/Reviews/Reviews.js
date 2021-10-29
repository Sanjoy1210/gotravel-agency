import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      const result = await axios('http://localhost:5000/reviews');
      setReviews(result.data);
    }

    loadReviews().catch(console.dir);
  }, []);

  return (
    <div className="review-section">
      <div className="review-wrapper">
        <Container>
          <div className="review-title">
            <h2>What They’re Saying</h2>
          </div>
          <div className="reviews">
            <Row>
              {
                reviews.map(review => <Review key={review._id} singleReview={review}></Review>)
              }
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Reviews;