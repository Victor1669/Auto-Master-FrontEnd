import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

export default function RootLayout() {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
}
