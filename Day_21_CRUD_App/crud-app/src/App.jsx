import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Userdata from './Userdata';
import Navbar from './Navbar';
import UserForm from './UserForm'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userdata' element={<Userdata />} />
        <Route path='/form' element={<UserForm />} /> 
      </Routes>
    </Router>
  );
};

export default App;
