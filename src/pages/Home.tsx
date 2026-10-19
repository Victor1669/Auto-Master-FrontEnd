import { Link } from "react-router";

import AuthScreen from "../components/AuthScreen";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <AuthScreen variant="welcome">
      <h1 className={styles.tagline}>
        Seu trabalho,
        <br />
        mais organizado.
      </h1>

      <div className={`${styles.actions} d-grid gap-3`}>
        <Link
          to="/login"
          className={`btn btn-automaster ${styles.button} d-flex align-items-center justify-content-center`}
        >
          Entrar
        </Link>
      </div>
    </AuthScreen>
  );
}
