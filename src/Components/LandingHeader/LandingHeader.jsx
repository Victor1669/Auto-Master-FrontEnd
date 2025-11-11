import { Link } from "react-router-dom";

import styles from "./LandingHeader.module.css";

export default function Header() {
  function handleScrollClick(top) {
    const main = document.getElementsByTagName("main")[0];

    main.scrollTo({ top, behavior: "smooth" });
  }
  return (
    <header className={styles.header}>
      <Logo handleScrollClick={handleScrollClick} />
      <nav className={styles.nav}>
        <Link to="login">Login</Link>
        <Link to="signin">Cadastrar-se</Link>
        <Link
          to="#"
          onClick={() => handleScrollClick(window.innerHeight - 100)}
        >
          Services
        </Link>
        <Link
          to="#"
          onClick={() => handleScrollClick(window.innerHeight * 2 - 100)}
        >
          About
        </Link>
        <Link to="#" onClick={() => handleScrollClick(window.innerHeight * 3)}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
function Logo({ handleScrollClick }) {
  return (
    <h1 className={styles.Logo} onClick={() => handleScrollClick(0)}>
      <span>AUTOMASTER</span>
      <img src="/src/assets/logo.png" width={100} alt="Logo" />
    </h1>
  );
}
