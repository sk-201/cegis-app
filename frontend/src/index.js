import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    name: "Home",
    element: <App />,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    element: <Dashboard />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
