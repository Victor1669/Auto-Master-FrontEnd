import { createRoot } from "react-dom/client";

import "./StyleSheets/index.css";

import App from "./Components/App.jsx";

import { AuthProvider } from "./Context/AuthContext.jsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
