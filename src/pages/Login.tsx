import AuthScreen from "../components/AuthScreen";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <AuthScreen variant="login">
      <LoginForm title="Bem-vindo de volta, Mecânico!" />
    </AuthScreen>
  );
}
