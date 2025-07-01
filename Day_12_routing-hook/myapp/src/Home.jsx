import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <center>
        {/* <Navbar /> */}
        <h1 className="text-center my-3 p-4 fw-bold ">Welcome to Home Page</h1>
        {/* <Outlet /> */}
        </center>
    </div>
  );
}
export default Home;