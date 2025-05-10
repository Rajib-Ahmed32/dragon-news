import React from "react";
import { format } from "date-fns";
import logo from "../assets/logo.png";
const Header = () => {
  const now = new Date();
  const day = format(now, "eeee");
  const rest = format(now, "MMMM do, yyyy");

  return (
    <div className="py-5 flex flex-col justify-center items-center gap-3 px-3 text-center">
      <img src={logo} alt="logo" className="w-64 sm:w-[400px]" />
      <p className="text-accent text-sm sm:text-base">
        Journalism without fear and fever
      </p>
      <p className="text-accent font-semibold text-sm sm:text-base">
        <span className="opacity-100">{day}, </span>
        <span className="opacity-70">{rest}</span>
      </p>
    </div>
  );
};

export default Header;
