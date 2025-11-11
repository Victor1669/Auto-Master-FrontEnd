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

    await CadastroVeiculo(state)
      .then(({ res }) => {
        setErro("");
        ipt1.current.focus();
        console.log(res.data.message);
        dispatch({ type: "clear" });
      })
      .catch((res) => {
        setErro(res.response.data.message);
        return;
      });
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
