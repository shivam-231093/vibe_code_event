import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import FAQpage from "./Pages/FAQpage";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Humans from "./Pages/Humans";
import AdminDashboardLayout from "./components/Admin/AdminDashboardLayout";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminRegister from "./Pages/Admin/AdminRegister";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import "./App.css";
import "flip-card-wc";
import humans from "./Pages/Humans";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/faqs",
        Component: FAQpage,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/humans",
        Component: humans,
      },
    ],
  },
  // Admin routes
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin/register",
    Component: AdminRegister,
  },
  {
    path: "/admin",
    Component: AdminDashboardLayout,
    children: [
      {
        path: "dashboard",
        Component: AdminDashboard,
      },
      {
        path: "users",
        Component: () => (
          <div className="text-white">Users Management - Coming Soon</div>
        ),
      },
      {
        path: "events",
        Component: () => (
          <div className="text-white">Events Management - Coming Soon</div>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Analytics />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
