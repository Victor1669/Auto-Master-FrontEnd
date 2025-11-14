import { useRef } from "react";
import { useClientes } from "../../../Hooks/useClientes";

import Form, { Field } from "../../../Components/Form/Form";

import { CadastrarCliente } from "../../../Services/Clientes.js";

import styles from "./Cad_Clientes.module.css";

export default function Cad_Cliente() {
  const { state, dispatch } = useClientes();

  const { nome, cpf, telefone, erro, setErro } = state;

  const ipt1 = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const { message, success } = await CadastrarCliente(state);

    if (success) {
      setErro("");
      dispatch({ type: "clear" });
      ipt1.current.focus();
    } else setErro(message);
  }

  return (
    <div className={styles.Clientes}>
      <Form
        className={styles.ClientesForm}
        title="Cadastro de clientes"
        onSubmit={handleSubmit}
        btnText="Cadastrar"
        errorMessage={erro}
      >
        <Field
          inputRef={ipt1}
          labelClassName="field"
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
          inputType="tel"
        />
      </Form>
    </div>
  );
}
