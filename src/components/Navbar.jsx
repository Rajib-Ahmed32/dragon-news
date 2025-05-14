import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from "../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="hidden md:block flex-1"></div>
      <div className="nav flex flex-1 gap-3 md:gap-5 text-accent">
        <NavLink
          to="/"
          className="hover:text-primary hover:underline transition duration-200"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-primary hover:underline transition duration-200"
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className="hover:text-primary hover:underline transition duration-200"
        >
          Career
        </NavLink>
      </div>

      <div className="login-btn flex items-center gap-3 sm:gap-5">
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL || userIcon}
              alt="User Avatar"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
            <span className="text-sm sm:text-base font-medium">
              {user.reloadUserInfo?.screenName ||
                user.displayName ||
                user.email ||
                "User"}
            </span>
            <button
              onClick={logOut}
              className="btn btn-outline btn-danger btn-sm px-3 py-1 text-xs"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex border border-primary rounded overflow-hidden">
            <Link
              to="/auth/login"
              className="btn btn-outline btn-primary btn-sm px-3 py-1 text-xs rounded-none"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn btn-primary btn-sm px-3 py-1 text-xs rounded-none border-l border-primary"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
