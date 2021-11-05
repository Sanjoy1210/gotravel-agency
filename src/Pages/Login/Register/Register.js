import React, { useState } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import googleIcon from '../../../images/logo/google.png';

import { NavLink } from 'react-router-dom';

const Register = () => {
  const { user, setIsLoading, signInUsingGoogle, setAuthError, authError, registerUser } = useAuth();
  const [loginData, setLoginData] = useState({});

  // redirect
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (data.password !== data.password2) {
      alert('Password does not match!');
      return;
    }
    registerUser(data.email, data.password);
  }

  return (
    <div className="login-area my-5 text-center">
      <Container>
        <div className="login">
          <h1>Register Here</h1>

          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Enter Your Name" {...register("displayName", { required: true })} />
              <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
              <input type="password" placeholder="Enter Your Password" {...register("password", { required: true })} />
              <input type="password" placeholder="Re-type Your Password" {...register("password2", { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="btn btn-primary" value="Register" />
              {
                user?.email && <Alert variant="success">Registration successfully!</Alert>
              }
              {authError && <Alert variant="warning">
                {authError}
              </Alert>}

              <p>Already have an account? <NavLink to="/login">Log in</NavLink></p>
            </form>
          </div>

          <div className="login-system">
            <p>Continue with</p>
            <Button onClick={handleGoogleLogin} variant="light"><img src={googleIcon} alt="Google Icon" /></Button>{' '}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;