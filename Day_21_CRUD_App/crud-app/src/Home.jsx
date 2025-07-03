import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container my-5 py-4">
      <div className="text-center">
        <h1 className="fw-bold text-warning mb-3">Welcome to <span className="text-dark">MyApp</span></h1>
        <p className="lead text-muted">
          Manage and share user information with ease. This app lets you store user data, send emails, and visualize everything with a responsive UI.
        </p>

        <img 
          src="https://media.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif" 
          alt="Welcome Animation"
          className="img-fluid rounded shadow my-4"
          style={{ maxHeight: '300px' }}
        />

        <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
          <Link to="/userdata" className="btn btn-outline-primary btn-lg px-4">
            View Users
          </Link>
          <Link to="/form" className="btn btn-warning btn-lg px-4 text-dark fw-semibold">
            Add New User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
