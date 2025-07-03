import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm px-4">
      <div className="container-fluid">
        {/* Logo and Brand */}
        <Link className="navbar-brand fw-bold text-warning d-flex align-items-center gap-2" to="/">
          <img 
            src="https://rohan-rakh-portfolio.netlify.app/favicon.ico" 
            alt="logo"
            style={{ height: '28px' }}
          />
          MyApp
        </Link>

        {/* Toggle for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/userdata">User Data</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/form">Add User</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
