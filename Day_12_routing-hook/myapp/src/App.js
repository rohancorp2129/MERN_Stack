import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Admin from './Admin';
import Footer from './Footer';

const App = () => {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Header />}></Route>

      {/* index route */}
      <Route index element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" component={() => <h1>404 Not Found</h1>}></Route>

          {/* admin panel */}
          <Route path="admin" element={<Admin />}>
            <Route path="dashboard" element={<Home />}></Route>
            <Route path="users" element={<About />}></Route>
            <Route path="posts" element={<Contact />}></Route>
            <Route path="*" element={() => <h1>404 Not Found</h1>}></Route>

          </Route>
          <Route path='footer' element={<Footer />}>
          </Route>
        </Routes>
    </Router>
   
  );
} 
export default App;
