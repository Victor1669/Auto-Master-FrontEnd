import { useRef } from "react";

import Form, { Field } from "../../../Components/Form/Form";

import { CadastroVeiculo } from "../../../Services/Veiculos";

import { useVeiculo } from "../../../Hooks/useVeiculo";

import styles from "./Cad_Veiculos.module.css";

export default function Cad_Veiculo() {
  const { state, dispatch } = useVeiculo();

  const { nomeCliente, modelo, cor, placa, erro, setErro } = state;

  const ipt1 = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const { message, success } = await CadastroVeiculo({
      nomeCliente,
      modelo,
      cor,
      placa,
    });

    if (success) {
      setErro("");
      ipt1.current.focus();
      dispatch({ type: "clear" });
    } else setErro(message);
  }

  return (
    <div className={styles.Veiculos}>
      <Form
        onSubmit={handleSubmit}
        className={styles.VeiculosForm}
        title="Cadastrar veículos"
        btnText="Cadastrar"
        btnClassName={styles.SubmitButton}
        errorMessage={erro}
        errorClassName={styles.Error}
      >
        <div className={styles.pt1}>
          <Field
            inputRef={ipt1}
            labelClassName="field"
            label="Nome do Cliente"
            value={nomeCliente}
            dispatch={dispatch}
            type="nomeCliente"
          />
          <Field
            labelClassName="field"
            label="Modelo"
            value={modelo}
            dispatch={dispatch}
            type="modelo"
          />
          <Field
            labelClassName="field"
            label="Cor"
            value={cor}
            dispatch={dispatch}
            type="cor"
          />
          <Field
            labelClassName="field"
            label="Placa"
            value={placa}
            dispatch={dispatch}
            type="placa"
          />
        </div>
      </Form>
    </div>
  );
}
