import { Link } from "react-router-dom";

import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <>
      <div className={styles.section1}>
        <Header />
      </div>
      <div className={styles.section2}></div>
    </>
  );
}
function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="login">Login</Link>
        <Link to="signin">Cadastrar-se</Link>
        <Link to="#">Services</Link>
        <Link to="#">Contact</Link>
      </nav>
    </header>
  );
}
