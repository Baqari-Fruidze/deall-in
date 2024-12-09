import { Children, StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ContextProvider from "./utils/contexts/ContextProvider";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import EnterpreneuerLayout from "./layouts/EnterpreneuerLayout";
import EnterpreneuerDashboard from "./pages/enterpreneuer/EnterpreneuerDashboard";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/",
        element: <EnterpreneuerLayout />,
        children: [
          {
            path: "/EnterpreneuerDashboard",
            element: <EnterpreneuerDashboard />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
