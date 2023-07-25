import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "~/App";

const HomePage = React.lazy(() => import("~/pages/Home"));
const Explore = React.lazy(() => import("~/pages/Explore"));
const Series = React.lazy(() => import("~/pages/Series"));
const Demand = React.lazy(() => import("~/pages/Demand"));
const Mypage = React.lazy(() => import("~/pages/Mypage"));

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/explore", element: <Explore /> },
      { path: "/series", element: <Series /> },
      { path: "/demand", element: <Demand /> },
      { path: "/mypage", element: <Mypage /> },
    ],
  },
]);

const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
