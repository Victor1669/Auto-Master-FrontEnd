import { ToastContainer } from "react-toastify";

export default function NotificationContainer() {
  return (
    <ToastContainer
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      position="top-center"
      closeButton={true}
      closeOnClick={true}
    />
  );
}
