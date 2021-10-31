import React from 'react';
import Banner from '../Banner/Banner';
import Hotels from '../Hotels/Hotels';
import Plans from '../Plans/Plans';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <Banner />
      <Plans />
      <Hotels />
      <Reviews />
    </div>
  );
};

export default Home;