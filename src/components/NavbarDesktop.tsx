import { Form, NavLink } from "react-router";

import navbarLogo from "../assets/navbar-logo.jpeg";
import type { User } from "../types/user";
import styles from "./NavbarDesktop.module.css";
import UserSummary from "./UserSummary";

const links = [
  { to: "/dashboard", label: "Início", icon: "bi-house-door-fill" },
  { to: "/clientes", label: "Clientes", icon: "bi-people" },
  { to: "/veiculos", label: "Veículos", icon: "bi-car-front" },
  { to: "/agendamentos", label: "Agendamentos", icon: "bi-calendar-event" },
  {
    to: "/ordens-de-servico",
    label: "Ordens de Serviço",
    icon: "bi-clipboard-check",
  },
  { to: "/mecanicos", label: "Mecânicos", icon: "bi-person-gear" },
];

type NavbarDesktopProps = {
  user: User;
};

export default function NavbarDesktop({ user }: NavbarDesktopProps) {
  return (
    <aside className={`${styles.navbar} d-none d-lg-flex flex-column`}>
      <NavLink to="/dashboard" className={styles.brand}>
        <img
          src={navbarLogo}
          alt="Automaster"
          className={styles.logo}
          draggable={false}
        />
      </NavLink>

      <nav aria-label="Navegação principal">
        <ul className={`${styles.list} list-unstyled`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
              >
                <i className={`bi ${link.icon}`} aria-hidden="true" />
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.user}>
        <UserSummary user={user} />
        <Form method="post" action="/logout" className="ms-auto">
          <button
            type="submit"
            className={styles.logout}
            aria-label="Sair"
            title="Sair"
          >
            <i className="bi bi-box-arrow-right" aria-hidden="true" />
          </button>
        </Form>
      </div>
    </aside>
  );
}
