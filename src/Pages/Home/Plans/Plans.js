import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Plan from '../Plan/Plan';

const Plans = () => {

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const loadPlans = async () => {
      const result = await axios('https://mysterious-scrubland-36243.herokuapp.com/plans');
      setPlans(result.data);
    }

    loadPlans().catch(console.dir);
  }, []);

  return (
    <div className="plans-section my-5">
      <div className="plans-wrapper">
        <Container>
          {
            plans.length ?
              <>
                <div className="plans-title text-center pb-4">
                  <h2>Planning Your Holiday</h2>
                </div>
                <div className="plans">
                  <Row>
                    {
                      plans.map(plan => <Plan key={plan._id} plan={plan}></Plan>)
                    }
                  </Row>
                </div>
              </> :
              <div className="text-center">
                <Spinner animation="grow" variant="warning" />
              </div>
          }
        </Container>
      </div>
    </div>
  );
};

export default Plans;