import { useRef } from "react";

import Form, { Field } from "../../../Components/Form/Form";

import { CadastrarCliente } from "../../../Services/Clientes";

import { useClientes } from "../../../Hooks/useClientes";

import styles from "./Clientes.module.css";

export default function Cad_Cliente() {
  const { state, dispatch } = useClientes();

  const { nome, cpf, telefone } = state;

  const ipt1 = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const { res, data } = await CadastrarCliente({ nome, cpf, telefone });

    console.log(data.message);

    if (!res.ok) {
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
          inputType="tel"
        />
      </Form>
    </div>
  );
}
