const BaseUrl = import.meta.env.VITE_BASE_URL;

import { useReducer, useRef } from "react";

import Form, { Field } from "../../../Components/Form/Form";

import styles from "./Funcionarios.module.css";

const initialState = {
  nome: "",
  email: "",
  senha: "",
  telefone: "",
  funcao: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "nome":
      return { ...state, nome: payload };
    case "email":
      return { ...state, email: payload };
    case "senha":
      return { ...state, senha: payload };
    case "telefone":
      return { ...state, telefone: payload };
    case "funcao":
      return { ...state, funcao: payload };
    case "clear":
      return {
        ...state,
        nome: "",
        email: "",
        senha: "",
        telefone: "",
        funcao: "",
      };
    default:
      throw new Error("Ação inválida: " + type);
  }
}

export default function Cadastro_Funcionario() {
  const [{ nome, email, senha, telefone, funcao }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const ipt1 = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    ipt1.current.focus();

    console.log({ nome, email, senha, telefone, funcao });
  }
  return (
    <div className={styles.Funcionarios}>
      <Form
        onSubmit={handleSubmit}
        className={styles.FuncionariosForm}
        title="Cadastro de funcionários"
        btnText="Cadastrar"
        btnClassName={styles.FormBtn}
      >
        <div className={styles.pt1}>
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
            label="Senha"
            value={senha}
            dispatch={dispatch}
            type="senha"
          />
          <Field
            labelClassName="field"
            label="Telefone"
            value={telefone}
            dispatch={dispatch}
            type="telefone"
          />
          <Field
            labelClassName="field"
            label="Função"
            value={funcao}
            dispatch={dispatch}
            type="funcao"
          />
        </div>
      </Form>
    </div>
  );
}
