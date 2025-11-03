import { NavLink } from "react-router-dom";

import styles from "./TabBar.module.css";

import TabUser from "../../assets/tab-user.png";
import TabVeic from "../../assets/tab-car.png";
import TabFunc from "../../assets/tab-funcionario.png";
import TabPesq from "../../assets/tab-query-services.png";
import TabAgen from "../../assets/tab-agendar.png";

export default function TabBar() {
  return (
    <nav className={styles.nav}>
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
    </nav>
  );
}
