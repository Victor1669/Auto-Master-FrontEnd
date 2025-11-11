import { useNavigate, Link } from "react-router-dom";

import Form, { Field } from "../../Components/Form/Form";
import { CarBackgroundEnter } from "../../Components/CarBackground/CarBackground";

import { LoginUsuario } from "../../Services/Usuario";

import { useUsuario } from "../../Hooks/useUsuario";

import { useAuth } from "../../Context/AuthContext";

import styles from "./Login.module.css";

export default function Login() {
  const { state, dispatch } = useUsuario();
  const { login } = useAuth();

  const { email, senha, erro, setErro } = state;

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    await LoginUsuario(state)
      .then(({ res }) => {
        login(res.data.user);
        navigate("/v1");
      })
      .catch((res) => {
        setErro(res.response.data.message);
      });
  }

  return (
    <div className={styles.Login}>
      <header>
        <h2 className="EnterTitle">AUTOMASTER</h2>
        <CarBackgroundEnter />
      </header>

      <Form
        className={styles.EnterForm}
        onSubmit={handleSubmit}
        btnText="Entrar"
        errorMessage={erro}
      >
        <Field
          labelClassName="field"
          type="email"
          value={email}
          dispatch={dispatch}
          label="Email"
        />
        <Field
          labelClassName="field"
          type="senha"
          inputType="password"
          value={senha}
          dispatch={dispatch}
          label="Senha"
        />
        <p>
          <span>Esqueceu a senha? </span>
          <Link to="reset">Clique aqui</Link>
        </p>
      </Form>
    </div>
  );
}
