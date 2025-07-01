import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <Outlet />
            <Footer />
            
        </div>
    );
}
export default Header;