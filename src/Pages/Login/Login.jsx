import { useNavigate, Link } from "react-router-dom";

import Form, { Field } from "../../Components/Form/Form";

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
        <h1>AUTOMASTER</h1>
      </header>
      <img
        className="red-car enter"
        src="/src/assets/red-car.png"
        alt="red car"
      />
      <span className="detail one"></span>
      <span className="detail two"></span>

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
