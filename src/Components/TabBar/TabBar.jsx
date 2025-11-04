import { NavLink } from "react-router-dom";

import styles from "./TabBar.module.css";

import TabHome from "../../assets/tab-home.png";
import TabUser from "../../assets/tab-user.png";
import TabVeic from "../../assets/tab-car.png";
import TabFunc from "../../assets/tab-funcionario.png";
import TabPesq from "../../assets/tab-query-services.png";
import TabAgen from "../../assets/tab-agendar.png";
import TabLgot from "../../assets/tab-logout.png";

export default function TabBar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="home">
        <img src={TabHome} alt="" />
      </NavLink>
      <NavLink to="clientes">
        <img src={TabUser} alt="" />
      </NavLink>
      <NavLink to="veiculos">
        <img src={TabVeic} alt="" />
      </NavLink>
      <NavLink to="funcionarios">
        <img src={TabFunc} alt="" />
      </NavLink>
      <NavLink to="servicos/lista">
        <img src={TabPesq} alt="" />
      </NavLink>
      <NavLink to="servicos/agendar">
        <img src={TabAgen} alt="" />
      </NavLink>
      <span></span>
      <span></span>
      <span></span>
      <NavLink to="/login">
        <img src={TabLgot} alt="" />
      </NavLink>
    </nav>
  );
}
