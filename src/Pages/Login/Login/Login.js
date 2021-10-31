import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import googleIcon from '../../../images/logo/google.png';
import './Login.css';

const Login = () => {
  const { setIsLoading, signInUsingGoogle } = useAuth();

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

  return (
    <div className="login-area my-5 text-center">
      <Container>
        <div className="login">
          <h1>Login Here</h1>
          <p>Continue with Google</p>
          <Button onClick={handleGoogleLogin} variant="light"><img src={googleIcon} alt="Google Icon" /></Button>{' '}
        </div>
      </Container>
    </div>
  );
};

export default Login;