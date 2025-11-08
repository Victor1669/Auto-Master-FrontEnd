import { useReducer, useRef } from "react";

import Form, { Field } from "../../../Components/Form/Form";

import styles from "./Clientes.module.css";
import { CadastrarCliente } from "../../../Services/Clientes";

const initialState = {
  nome: "",
  cpf: "",
  telefone: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "nome":
      return { ...state, nome: payload };
    case "cpf":
      return { ...state, cpf: payload };
    case "telefone":
      return { ...state, telefone: payload };
    case "clear":
      return { ...state, nome: "", cpf: "", telefone: "" };
    default:
      throw new Error("Ação inválida: " + type);
  }
}

export default function Cad_Cliente() {
  const [{ nome, cpf, telefone }, dispatch] = useReducer(reducer, initialState);

  const ipt1 = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const body = { nome, cpf, telefone };

    const { req } = await CadastrarCliente(body);

    const msg = await req.json();

    console.log(msg.message);

    if (!req.ok) {
      return;
    }

    dispatch({ type: "clear" });
    ipt1.current.focus();
  }

  return (
    <div className={styles.Clientes}>
      <Form
        className={styles.ClientesForm}
        title="Cadastro de clientes"
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
          label="CPF"
          value={cpf}
          dispatch={dispatch}
          type="cpf"
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
