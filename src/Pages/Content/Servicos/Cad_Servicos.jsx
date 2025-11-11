import { useRef } from "react";

import Form, { Field } from "../../../Components/Form/Form";

import { CadastrarServico } from "../../../Services/Servicos";

import { useServicos } from "../../../Hooks/useServicos";

import styles from "./Cad_Servicos.module.css";

export default function Cad_Servicos() {
  const { state, dispatch } = useServicos();

  const { placa, data, hora, preco, descricao, erro, setErro } = state;

  const ipt1 = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const { res } = await CadastrarServico(state).catch((res) =>
      setErro(res.response.data.message)
    );

    if (res.status >= 300) return;

    ipt1.current.focus();
    dispatch({ type: "clear" });
  }

  return (
    <div className={styles.Agendar}>
      <Form
        onSubmit={handleSubmit}
        className={styles.AgendarForm}
        title="Agendamento de serviço"
        btnText="Agendar"
        btnClassName={styles.SubmitButton}
        errorMessage={erro}
        errorClassName={styles.Error}
      >
        <div className={styles.FieldSet}>
          <Field
            labelClassName="field"
            label="Placa"
            dispatch={dispatch}
            value={placa}
            type="placa"
            inputRef={ipt1}
          />
          <Field
            labelClassName="field"
            label="Data"
            dispatch={dispatch}
            value={data}
            type="data"
            inputType="date"
          />
          <Field
            labelClassName="field"
            label="Hora"
            dispatch={dispatch}
            value={hora}
            type="hora"
            inputType="time"
          />
          <Field
            labelClassName="field"
            label="Preço"
            dispatch={dispatch}
            value={preco}
            type="preco"
          />
        </div>
        <DescField value={descricao} dispatch={dispatch} />
      </Form>
    </div>
  );
}
function DescField({ value, dispatch }) {
  return (
    <label className={`field ${styles.DescField}`}>
      <span>Descrição</span>
      <textarea
        value={value}
        onChange={(e) =>
          dispatch({ type: "descricao", payload: e.target.value })
        }
      ></textarea>
    </label>
  );
}
