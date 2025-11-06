const BaseUrl = import.meta.env.VITE_BASE_URL;

import { useReducer, useRef } from "react";

import Form, { Field } from "../../../Components/Form/Form";

import styles from "./Clientes.module.css";

const initialState = {
  nome: "",
  email: "",
  telefone: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "nome":
      return { ...state, nome: payload };
    case "email":
      return { ...state, email: payload };
    case "telefone":
      return { ...state, telefone: payload };
    case "clear":
      return { ...state, nome: "", email: "", telefone: "" };
    default:
      throw new Error("Ação inválida: " + type);
  }
}

export default function Cadastro_Cliente() {
  const [{ nome, email, telefone }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const ipt1 = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "clear" });
    ipt1.current.focus();

    console.log({ nome, email, telefone });
  }

  return (
    <div className={styles.Clientes}>
      <Form
        className={styles.ClientesForm}
        onSubmit={handleSubmit}
        btnText="Cadastrar"
      >
        <Field
          labelClassName="field"
          inputRef={ipt1}
          label="Nome"
          value={nome}
          dispatch={dispatch}
          type="nome"
        />
        <Field
          labelClassName="field"
          label="Email"
          value={email}
          dispatch={dispatch}
          type="email"
        />
        <Field
          labelClassName="field"
          label="Telefone"
          value={telefone}
          dispatch={dispatch}
          type="telefone"
        />
      </Form>
    </div>
  );
}
