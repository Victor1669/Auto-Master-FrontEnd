import { useReducer } from "react";

import { useNavigate } from "react-router-dom";

import Form, { Field } from "../../Components/Form/Form";

import { CadastroUsuario } from "../../Services/Usuario";

import styles from "./SignIn.module.css";

// REDUCER
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

// FUNÇÃO PRINCIPAL
export default function Login() {
  const [{ email, senha }, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const body = { email, senha };

    const { req } = await CadastroUsuario(body);

    const msg = await req.json();

    console.log(msg.message);

    if (!req.ok) {
      return;
    }

    navigate("/v1");
  }

  return (
    <div className={styles.Signin}>
      <header>
        <h1>AUTOMASTER</h1>
        <img
          className="red-car enter"
          src="/src/assets/red-car.png"
          alt="red car"
        />
        <span className="detail one"></span>
        <span className="detail two"></span>
      </header>

      <Form
        className={styles.EnterForm}
        onSubmit={handleSubmit}
        btnText="Cadastrar"
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
      </Form>
    </div>
  );
}
