import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./routes/Projects.jsx";
import PlayPage from "./routes/PlayPage.jsx";
import Resume from "./routes/Resume.jsx";
import Error404 from "./routes/Error404.jsx";
import Hidden from "./routes/hidden.jsx";

// app entry point.

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/projects", element: <Projects /> },
  { path: "/playpage", element: <PlayPage /> },
  { path: "/resume", element: <Resume /> },
  { path: "/*", element: <Error404 /> },
  { path: "/me/me", element: <Hidden /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
