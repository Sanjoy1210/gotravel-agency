import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-7.jpg';
import banenr2 from '../../../images/banner/banner-6.jpg';
import banenr3 from '../../../images/banner/banner-8.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Your Jurney Begins With Us</h1>
            <p>Best way to find your dream place. The only urgency I feel is to keep on, at a slow pace, with my journey.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banenr2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Plan Your Best Holiday With Us & Enjoy</h1>
            <p>We serve our client the amazing experience.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banenr3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>We Make Awesome Tours</h1>
            <p>Travel Far Enough, You Meet Yourself.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;