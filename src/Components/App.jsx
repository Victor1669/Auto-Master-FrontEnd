import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login";
import SignIn from "../Pages/SignIn";
import Content from "../Pages/Content/Content";
import Home from "../Pages/Home";

import Cad_Clientes from "../Pages/Cadastro_Clientes";
import Cad_Veiculos from "../Pages/Cadastro_Veiculos";
import Cad_Funcionarios from "../Pages/Cadastro_Funcionarios";

import Servicos from "../Pages/Content/Servicos/Servicos";
import Agendar from "../Pages/Content/Servicos/Agendar";
import Lista from "../Pages/Content/Servicos/Lista";
import ListaHoje from "../Pages/Content/Servicos/ListaHoje";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="v1" element={<Content />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="clientes" element={<Cad_Clientes />} />
          <Route path="veiculos" element={<Cad_Veiculos />} />
          <Route path="funcionarios" element={<Cad_Funcionarios />} />
          <Route path="servicos" element={<Servicos />}>
            <Route index element={<Navigate replace to="lista" />} />
            <Route path="lista" element={<Lista />} />
            <Route path="agendar" element={<Agendar />} />
            <Route path="hoje" element={<ListaHoje />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
