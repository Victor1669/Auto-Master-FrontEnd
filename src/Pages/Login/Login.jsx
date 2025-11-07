import { useReducer } from "react";

import { useNavigate, Link } from "react-router-dom";

import Form, { Field } from "../../Components/Form/Form";
const BaseUrl = import.meta.env.VITE_BASE_URL;

import styles from "./Login.module.css";

const initialState = {
  email: "",
  senha: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "email":
      return { ...state, email: payload };
    case "senha":
      return { ...state, senha: payload };
    default:
      throw new Error("Erro ao fazer login!");
  }
}

export default function Login() {
  const [{ email, senha }, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
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
