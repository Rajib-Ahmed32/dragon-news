import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="hidden md:block flex-1"></div>
      <div className="nav flex flex-1 gap-3 md:gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3 sm:gap-5">
        <img src={user} alt="user img" className="w-8 h-8 sm:w-10 sm:h-10" />
        <button className="btn btn-primary px-4 py-1 sm:px-8 sm:py-2 text-sm sm:text-base">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
