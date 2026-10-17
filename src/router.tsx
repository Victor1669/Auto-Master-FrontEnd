import { createBrowserRouter } from "react-router";

import { loginAction, logoutAction } from "./actions/auth";
import RootLayout from "./layouts/RootLayout";
import { guestLoader, logoutLoader } from "./loaders/auth";
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
      { path: "*", Component: NotFound },
    ],
  },
]);
