import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-4">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default AuthLayout;
