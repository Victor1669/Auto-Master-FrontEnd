import AuthScreen from "../components/AuthScreen";
import LoginForm from "../components/LoginForm";
import LogoutButton from "../components/LogoutButton";

export default function Login() {
  return (
    <AuthScreen variant="login">
      <LoginForm title="Bem-vindo de volta, Mecânico!" />
      <LogoutButton className="mt-3" />
    </AuthScreen>
  );
}
