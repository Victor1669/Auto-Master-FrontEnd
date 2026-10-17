import { redirect } from "react-router";

import { getSession } from "../services/auth";

export function guestLoader() {
  if (getSession()) {
    return redirect("/dashboard");
  }

  return null;
}

export function logoutLoader() {
  return redirect("/");
}
