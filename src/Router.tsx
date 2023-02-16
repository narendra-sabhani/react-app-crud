import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import UploadDownload from "./Components/UploadDownload";
import User from "./Components/User";
export const  Router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/user",
      element: <User/>,
    },
    {
      path: "/upload",
      element: <UploadDownload/>,
    },
  ]);
  