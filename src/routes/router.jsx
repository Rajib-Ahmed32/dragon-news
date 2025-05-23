import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CareerPage from "../pages/CareerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <CategoryNews />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "career",
    element: <CareerPage />,
  },
]);

export default router;
