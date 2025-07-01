import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterWithTimer from './CounterWithTimer.jsx'
import SearchTracker from './SearchTracker.jsx'
import Home from './Home.jsx'
import UserProfile from './UserProfile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <CounterWithTimer/>
    <SearchTracker/>
    <Home/>
    <UserProfile/> */}
  </StrictMode>
)
