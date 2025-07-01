import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CounterWithTimer from './CounterWithTimer';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import Home from './Home';
import UserProfile from './UserProfile';
import SearchTracker from './SearchTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<CounterWithTimer />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/search' element={<SearchTracker />} />
        <Route path='/user/:id' element={<UserProfile />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
