import { createBrowserRouter } from "react-router";

import { loginAction, logoutAction } from "./actions/auth";
import AppLayout from "./layouts/AppLayout";
import RootLayout from "./layouts/RootLayout";
import { appLoader } from "./loaders/app";
import { guestLoader, logoutLoader } from "./loaders/auth";
import { dashboardLoader } from "./loaders/dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    HydrateFallback: () => null,
    children: [
      {
        index: true,
        Component: Home,
        loader: guestLoader,
        action: loginAction,
      },
      {
        path: "login",
        loader: guestLoader,
        action: loginAction,
        lazy: async () => {
          const { default: Login } = await import("./pages/Login");
          return { Component: Login };
        },
      },
      {
        path: "logout",
        loader: logoutLoader,
        action: logoutAction,
      },
      {
        Component: AppLayout,
        loader: appLoader,
        children: [
          {
            path: "dashboard",
            loader: dashboardLoader,
            lazy: async () => {
              const { default: Dashboard } = await import("./pages/Dashboard");
              return { Component: Dashboard };
            },
          },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
