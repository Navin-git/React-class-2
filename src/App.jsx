import { Outlet, useRoutes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./page/Home";
import Layout from "./components/static/Layout";
import Project from "./page/Project";
import Contact from "./page/Contact";
import About from "./page/About";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "project",
          element: <Project />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "work",
          element: <div>hello</div>,
        },
      ],
    },
  ]);
  return routes;
};

export default App;
