import React from 'react'
import { NavLink } from 'react-router-dom';

// import './Navbar.css'

// Used to redirecting or navigating to
//  one component /page to another component without reloading of our web browser/page i.e SPA

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">


                    <NavLink className="navbar-brand" to="/"><h2 className='text-warning'>React Router</h2></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                            <li className="nav-item mx-5">
                                <NavLink className="nav-link text-light" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink className="nav-link text-light" to="/about">About Us</NavLink>
                            </li>
                                <li className="nav-item mx-5">
                                <NavLink className="nav-link text-light" to="/contact">Contact</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar

