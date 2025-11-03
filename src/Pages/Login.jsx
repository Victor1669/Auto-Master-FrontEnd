import { useReducer } from "react";
import Form, { Field } from "../Components/Form";

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

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="Login">
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
        className="enter-form"
        onSubmit={handleSubmit}
        btnClassName="form-btn"
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
      </Form>
    </div>
  );
}
