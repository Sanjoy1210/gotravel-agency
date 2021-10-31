import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const loadHotels = async () => {
      const result = await axios('http://localhost:5000/hotels');
      setHotels(result.data);
    }

    loadHotels().catch(console.dir);
  }, [])

  return (
    <div className="hotel-area">
      <div className="hotel-wrapper">
        <Container>
          {
            <>
              <div className="hotel-title text-center pb-4">
                <h2>Explore Our Top Hotels</h2>
              </div>
              <div className="hotels">
                <Row>
                  {
                    hotels.map(hotel => <Hotel key={hotel._id} hotel={hotel}></Hotel>)
                  }
                </Row>
              </div>
            </>
          }
        </Container>
      </div>
    </div>
  );
};

export default Hotels;