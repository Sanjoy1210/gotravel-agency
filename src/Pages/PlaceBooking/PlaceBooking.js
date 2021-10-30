import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceBooking.css';

const PlaceBooking = () => {

  const { user } = useAuth();
  const { id } = useParams();
  const [plan, setPlan] = useState({});
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    // fetch(`http://localhost:5000/plan/${id}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setPlan(data);
    //   })

    const loadSinglePlan = async () => {
      const result = await axios(`http://localhost:5000/plan/${id}`);
      setPlan(result.data);
      console.log(result.data);
    }

    loadSinglePlan().catch(console.dir);
  }, []);

  console.log(plan);

  const onSubmit = async (data) => {
    data.status = 'pending';
    // data.planTitle = { plan.planTitle };
    console.log(data);
    const result = await axios.post('http://localhost:5000/booking', data);
    if (result.data.insertedId) {
      alert('Booking successfully');
      reset();
    }
  }

  return (
    <div className="place-booking">
      <div className="place-booking-wrapper">
        <Container>
          <Row>
            <Col sm={12} lg={9}>
              <div>
                <h2>{plan.planTitle}</h2>
              </div>
              <p>{plan?.description}</p>
            </Col>
            <Col sm={12} lg={3}>
              <div className="place-booking-form">
                <div className="title">
                  <h2>Book this tour</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}
                  <input defaultValue={user.displayName} {...register("name")} />

                  {/* include validation with required or other standard HTML validation rules */}
                  <input defaultValue={user.email} {...register("email", { required: true })} />

                  <input placeholder="Enter your address" {...register("address")} />
                  <input placeholder="Enter your phone number" {...register("phone")} />
                  <input type="date" {...register("date")} />
                  <input defaultValue={plan.planTitle} {...register("planTitle")} />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && <span>This field is required</span>}

                  <input type="submit" value="Book now" className="btn btn-warning" />
                </form>
              </div>
            </Col>
            <Col>
              <div className="photo-gellary">
                <div>
                  <h2>From Gellary</h2>
                </div>
                <div>
                  <img src={plan?.imageUrl} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PlaceBooking;