import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home";
import Cad_Clientes from "../Pages/Cadastro_Clientes";
import Cad_Veiculos from "../Pages/Cadastro_Veiculos";
import Cad_Funcionarios from "../Pages/Cadastro_Funcionarios";
import Agendar_Servicos from "../Pages/Agendar_Servicos";
import Servicos from "../Pages/Serviços_Agendados";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="home" element={<Home />} />
          <Route path="registrar">
            <Route index element={<Navigate replace to="clientes" />} />
            <Route path="clientes" element={<Cad_Clientes />} />
            <Route path="veiculos" element={<Cad_Veiculos />} />
            <Route path="funcionario" element={<Cad_Funcionarios />} />
            <Route path="servicos" element={<Agendar_Servicos />} />
          </Route>
          <Route path="servicos" element={<Servicos />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}
