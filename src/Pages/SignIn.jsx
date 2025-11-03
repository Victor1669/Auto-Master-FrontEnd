import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/v1");
  }

  return (
    <div id="SignIn">
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
        className="enter-form"
        onSubmit={handleSubmit}
        btnClassName="form-btn"
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
