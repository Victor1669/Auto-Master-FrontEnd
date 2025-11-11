import { NavLink, Link } from "react-router-dom";

import styles from "./TabBar.module.css";

import TabHome from "../../assets/tab-home.png";
import TabUser from "../../assets/tab-user.png";
import TabVeic from "../../assets/tab-car.png";
import TabFunc from "../../assets/tab-funcionario.png";
import TabPesq from "../../assets/tab-query-services.png";
import TabAgen from "../../assets/tab-agendar.png";
import TabLgot from "../../assets/tab-logout.png";

import { useAuth } from "../../Context/AuthContext";

export default function TabBar() {
  const { logout } = useAuth();

  return (
    <nav className={styles.nav}>
      <span></span>
      <NavLink to="home">
        <img src={TabHome} alt="" />
      </NavLink>
      <NavLink to="clientes">
        <img src={TabUser} alt="" />
      </NavLink>
      <NavLink to="veiculos">
        <img src={TabVeic} alt="" />
      </NavLink>
      <NavLink to="servicos/agendar">
        <img src={TabAgen} alt="" style={{ paddingTop: 5 }} />
      </NavLink>
      <Link to="servicos/lista">
        <img src={TabPesq} alt="" />
      </Link>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button onClick={logout}>
        <img src={TabLgot} alt="" />
      </button>
    </nav>
  );
}
