import { useNavigate, Link } from "react-router-dom";

import Form, { Field } from "../../Components/Form/Form";

import { LoginUsuario } from "../../Services/Usuario";

import { useUsuario } from "../../Hooks/useUsuario";

import styles from "./Login.module.css";

export default function Login() {
  const { state, dispatch } = useUsuario();

  const { email, senha } = state;

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const { res, data } = await LoginUsuario(state);

    console.log(data.message);

    if (!res.ok) {
      return;
    }

    navigate("/v1");
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
