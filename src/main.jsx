import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthPorvider from "./Provider/AuthContext";
import router from "./Routes/Routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPorvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthPorvider>
  </React.StrictMode>
);
