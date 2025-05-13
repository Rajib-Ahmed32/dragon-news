import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header className="">
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mt-8 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <section className="md:col-span-3 sticky h-fit top-0">
          <LeftAside />
        </section>
        <section className="md:col-span-6">
          <Outlet />
        </section>
        <section className="md:col-span-3 sticky h-fit top-0">
          <RightAside />
        </section>
      </main>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default HomeLayout;
