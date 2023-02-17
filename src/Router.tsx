import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddUser from "./Components/AddUser";
import Home from './Components/Home';
import UploadDownload from "./Components/UploadDownload";
import User from "./Components/Users";
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
    {
      path: "/addUser",
      element: <AddUser/>,
    },
  ]);
  