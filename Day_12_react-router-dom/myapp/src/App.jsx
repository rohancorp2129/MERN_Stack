import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <>
    <Router>
          <Routes>
                <Route path='/' element={<Home />}></Route>
                <Navbar />
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/service' element={<Service />}></Route>
                <Route path='*' element={<PageNotFound/>}></Route>
          </Routes>
    </Router>
    </>
  );
}

export default App;
