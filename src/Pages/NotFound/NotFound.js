import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <Link to="/home">
        <Button variant="danger">Go to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;