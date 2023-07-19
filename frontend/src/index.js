import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./Pages/Details";
import Cart from "./Pages/Cart";
import Welcome from "./Pages/Welcome";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Restaurant Dashboard/Dashboard";
import Menu from "./Pages/Restaurant Dashboard/Menu";
import Orders from "./Pages/Restaurant Dashboard/Orders";
import AdminProfile from "./Pages/Restaurant Dashboard/Profile";
import Review from "./Pages/Restaurant Dashboard/Review";
import Admin from "./Pages/Restaurant Dashboard/Admin";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order",
        element: <Orders />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
