import React from "react";
import Layout from "./static/Layout";
import Home from "../page/Home";
import { Outlet, useRoutes } from "react-router-dom";
import Project from "../page/project/Project";
import Addproduct from "./add-product/Addproduct";
import ProjectDetails from "../page/project/ProjectDetails";
import Contact from "../page/Contact";
import About from "../page/About";
import PostList from "./Post";
import PostDetails from "../page/PostDetails";

const Routes = () => {
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
          element: (
            <>
              <Outlet />
            </>
          ),
          children: [
            {
              index: true,
              element: <Project />,
            },
            {
              path: "add",
              element: <Addproduct />,
            },
            {
              path: ":id",
              element: <ProjectDetails />,
            },
          ],
        },
        {
          path: "post",
          element: (
            <>
              <Outlet />
            </>
          ),
          children: [
            {
              index: true,
              element: <PostList />,
            },
            {
              path: ":id",
              element: <PostDetails />,
            },
          ],
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
          element: (
            <div>
              work
              <Outlet />
            </div>
          ),
          children: [
            {
              index: true,
              element: <div>hello</div>,
            },
            {
              path: "add",
              element: <div>add work</div>,
            },
          ],
        },
      ],
    },
  ]);
  return routes;
};

export default Routes;
