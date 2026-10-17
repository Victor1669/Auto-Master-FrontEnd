import { Link } from "react-router";

import AuthScreen from "../components/AuthScreen";
import LogoutButton from "../components/LogoutButton";

export default function Home() {
  return (
    <AuthScreen variant="welcome">
      <h1 className="auth-mobile__tagline">
        Seu trabalho,
        <br />
        mais organizado.
      </h1>

      <div className="auth-mobile__actions d-grid gap-3">
        <Link
          to="/login"
          className="btn btn-automaster d-flex align-items-center justify-content-center"
        >
          Entrar
        </Link>
        <LogoutButton />
      </div>
    </AuthScreen>
  );
}
