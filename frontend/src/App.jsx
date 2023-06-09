import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./home/Home";
import CategoryPage from "./categoryPage/CategoryPage";
import Meal from "./meal/Meal";
import AddMeal from "./addMeal/AddMeal";
import Orders from "./orders/Order";
import Messages from "./messages/Messages";
import Message from "./message/Message";
import MyMeal from "./myMeal/MyMeal";
import Login from "./login/Login";
import Register from "./register/Register";
import "./app.scss";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const HeaderFooterPage = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeaderFooterPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/CategoryPage",
          element: <CategoryPage />,
        },
        {
          path: "/Orders",
          element: <Orders />,
        },
        {
          path: "/AddMeal",
          element: <AddMeal />,
        },
        {
          path: "/Meal",
          element: <Meal />,
        },
        {
          path: "/myMeal",
          element: <MyMeal />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
