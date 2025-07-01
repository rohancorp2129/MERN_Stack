import {NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      
      <nav className='navbar navbar-expand-lg bg-dark fw-bold'>
        <NavLink to='/' className='navbar-brand'><h2 className='text-primary'>Advanced Routing</h2></NavLink>

        <ul className='navbar-nav m-auto'>
            <li className='nav-item mx-3'>
                <NavLink className='nav-link text-light' to='/'>Home</NavLink>
            </li>
            <li className='nav-item mx-3'>
                <NavLink className='nav-link text-light' to='/about'>About Us</NavLink>
            </li>
            <li className='nav-item mx-3'>
                <NavLink className='nav-link text-light' to='/services'>Our Services</NavLink>
            </li>
            <li className='nav-item mx-3'>
                <NavLink className='nav-link text-light' to='/contact'>Contact</NavLink>
            </li>
        </ul>

      </nav>
    </div>
  )
}
