import { Routes, Route, Navigate } from "react-router-dom";

import NotificationContainer from "../Components/NotificationContainer";

import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import ResetPassword from "../Pages/Login/ResetPassword/ResetPassword";
import SignIn from "../Pages/Cadastro/SignIn";

import Content from "./Content/Content";
import { ProtectedRoute } from "../Components/ProtectedRoute";

import Home from "../Pages/v1/Home";

import Cad_Clientes from "../Pages/v1/Clientes/Cad_Clientes";
import Cad_Veiculos from "../Pages/v1/Veiculos/Cad_Veiculos";

import Servicos from "../Components/Servicos";
import Cad_Servicos from "../Pages/v1/Servicos/Cad_Servicos";
import ListaServicos from "../Pages/v1/ListaServicos/ListaServicos";

export default function App() {
  return (
    <div className="App">
      <NotificationContainer />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="login/reset" element={<ResetPassword />} />
        <Route path="signin" element={<SignIn />} />
        <Route
          path="v1"
          element={
            <ProtectedRoute>
              <Content />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="clientes" element={<Cad_Clientes />} />
          <Route path="veiculos" element={<Cad_Veiculos />} />
          <Route path="servicos" element={<Servicos />}>
            <Route index element={<Navigate replace to="lista" />} />
            <Route path="lista" element={<ListaServicos />} />
            <Route path="agendar" element={<Cad_Servicos />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
