import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Infotech</h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-6">
        We help businesses grow through innovative web solutions, smart design, and user-focused technology. 
        Whether you're launching a new product or upgrading your digital presence, we’re here to make it happen.
      </p>

     
      <Link to="/services">
        <button className="bg-blue-600 text-dark px-6 py-2 rounded-lg text-lg hover:bg-blue-700 transition">
          Explore Our Services
        </button>
      </Link>

    </div>
  );
};

export default Home;
