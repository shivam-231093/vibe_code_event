import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import FAQpage from "./Pages/FAQpage";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Humans from "./Pages/Humans";
import Sponsors from "./Pages/Sponsors";
import "./App.css";
import "flip-card-wc";
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
        Component: Humans,
      },
      {
        path: "/sponsors",
        Component: Sponsors,
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
