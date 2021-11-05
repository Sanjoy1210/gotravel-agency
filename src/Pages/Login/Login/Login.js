import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import googleIcon from '../../../images/logo/google.png';
import './Login.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const { setIsLoading, signInUsingGoogle, loginUser } = useAuth();

  // redirect
  const location = useLocation();
  const history = useHistory();
  // const redirect_uri = location.state?.from || '/home';

  // const handleGoogleLogin = () => {
  //   signInUsingGoogle()
  //     .then(result => {
  //       history.push(redirect_uri);
  //     })
  //     .finally(() => setIsLoading(false));
  // }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    loginUser(data.email, data.password, location, history);
  }

  return (
    <div className="login-area my-5 text-center">
      <Container>
        <div className="login">
          <h1>Login Here</h1>

          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="email" placeholder="Enter Your Email" {...register("email", { required: true })} />
              <input type="password" placeholder="Enter Your Password" {...register("password", { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="btn btn-primary" value="Log in" />

              <p>Don't have an account? <NavLink to="/register">Register now</NavLink></p>
            </form>
          </div>

          <div className="login-system">
            <p>Continue with</p>
            <Button onClick={() => signInUsingGoogle(location, history)} variant="light"><img src={googleIcon} alt="Google Icon" /></Button>{' '}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;