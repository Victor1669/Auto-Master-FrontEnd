import { NavLink } from "react-router";

import styles from "./NavbarMobile.module.css";

const links = [
  {
    to: "/dashboard",
    label: "Início",
    icon: "bi-house-door",
    iconActive: "bi-house-door-fill",
  },
  {
    to: "/ordens-de-servico",
    label: "Ordens",
    icon: "bi-clipboard-check",
    iconActive: "bi-clipboard-check-fill",
  },
  {
    to: "/veiculos",
    label: "Veículos",
    icon: "bi-car-front",
    iconActive: "bi-car-front-fill",
  },
  {
    to: "/perfil",
    label: "Perfil",
    icon: "bi-person",
    iconActive: "bi-person-fill",
  },
];

export default function NavbarMobile() {
  return (
    <nav className={`${styles.navbar} d-lg-none`} aria-label="Navegação principal">
      <ul className={`${styles.list} list-unstyled`}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <i
                    className={`bi ${isActive ? link.iconActive : link.icon}`}
                    aria-hidden="true"
                  />
                  <span>{link.label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
