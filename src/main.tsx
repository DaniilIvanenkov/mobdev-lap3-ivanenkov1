import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./components/Button/Button";
import "./components/Input/Input";
import { Router, RouterProvider } from "react-router-dom";
import router from "./app/Router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
