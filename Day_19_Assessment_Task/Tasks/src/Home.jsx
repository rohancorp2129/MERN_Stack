import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from './useDocumentTitle';

const Home = () => {
  useDocumentTitle('Home Page');

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <hr />
      <h1>Task : 5 Welcome to Home Page</h1>

      {/* Navigation Buttons */}
      <div style={{ margin: '20px 0' }}>
        <Link to="/"><button style={{ margin: '5px' }}>Home</button></Link>
        <Link to="/counter"><button style={{ margin: '5px' }}>Counter</button></Link>
        <Link to="/about"><button style={{ margin: '5px' }}>About</button></Link>
        <Link to="/contact"><button style={{ margin: '5px' }}>Contact</button></Link>
        <Link to="/search"><button style={{ margin: '5px' }}>Search Tracker</button></Link>
      </div>

      {/* User Buttons */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/user/1"><button style={{ margin: '5px' }}>View User 1</button></Link>
        <Link to="/user/2"><button style={{ margin: '5px' }}>View User 2</button></Link>
        <Link to="/user/17"><button style={{ margin: '5px' }}>View User 17</button></Link>
      </div>
    </div>
  );
};

export default Home;
