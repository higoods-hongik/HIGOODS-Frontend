import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "~/App";
import AdminPage from "./pages/admin";

const HomePage = React.lazy(() => import("~/pages/main/Home"));
const Explore = React.lazy(() => import("~/pages/main/Explore"));
const Series = React.lazy(() => import("~/pages/main/Series"));
const Demand = React.lazy(() => import("~/pages/main/Demand"));
const Mypage = React.lazy(() => import("~/pages/main/Mypage"));
const BasicInfo = React.lazy(() => import("~/pages/admin/BasicInfo"));
const Buyer = React.lazy(() => import("~/pages/admin/Buyer"));
const Dashboard = React.lazy(() => import("~/pages/admin/Dashboard"));
const Notice = React.lazy(() => import("~/pages/admin/Notice"));
const OrderForm = React.lazy(() => import("~/pages/admin/OrderForm"));
const Delivery = React.lazy(() => import("~/pages/admin/Delivery"));
const Detail = React.lazy(() => import("~/pages/main/Detail"));
const Form = React.lazy(() => import("~/pages/main/Form"));

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/explore", element: <Explore /> },
      { path: "/series", element: <Series /> },
      { path: "/demand", element: <Demand /> },
      { path: "/mypage", element: <Mypage /> },
      { path: "/goods/:id", element: <Detail /> },
      { path: "/goods/:id/start", element: <Form /> },
      {
        path: "/admin",
        element: <AdminPage />,
        children: [
          { path: "info", element: <BasicInfo /> },
          { path: "buyer", element: <Buyer /> },
          { path: "notice", element: <Notice /> },
          { path: "form", element: <OrderForm /> },
          { path: "delivery", element: <Delivery /> },
          { path: "dashboard", element: <Dashboard /> },
        ],
      },
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
