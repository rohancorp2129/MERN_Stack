import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
      <NavLink to='/' style={styles.link}>Go back home</NavLink>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  },
  heading: {
    fontSize: '6rem',
    margin: 0,
    color: '#343a40',
  },
  message: {
    fontSize: '1.5rem',
    color: '#6c757d',
  },
  link: {
    marginTop: '20px',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default PageNotFound;
