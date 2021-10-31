import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddPlans.css';

const AddPlans = () => {

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {

    const addPlans = async () => {
      const result = await axios.post('https://mysterious-scrubland-36243.herokuapp.com/addplans', data);
      if (result.data.insertedId) {
        alert('plan added successfully');
        reset();
      }
    }

    addPlans().catch(console.dir);
  }

  return (
    <div>
      <Container>
        <div className="add-plan">
          <div className="add-plan-title">
            <h2 className="mb-5">Add a new Plans</h2>
          </div>
          <div className="add-plan-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input {...register("planTitle")} placeholder="Enter Plan Title" />

              {/* include validation with required or other standard HTML validation rules */}
              <input {...register("day")} placeholder="Enter Day" />
              <input {...register("persons")} placeholder="Enter Persons" />
              <input {...register("ratings")} placeholder="Enter Ratings" />
              <input {...register("price")} placeholder="Enter Price" />

              <input {...register("imageUrl")} placeholder="Enter Image url" />
              <textarea rows="4" {...register("description")} placeholder="Enter Description" />

              <input type="submit" className="btn btn-warning" value="Add new plan" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddPlans;