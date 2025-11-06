const BaseUrl = import.meta.env.VITE_BASE_URL;

import { useReducer, useRef } from "react";

import Form, { Field } from "../../../Components/Form/Form";

import styles from "./Agendar.module.css";

const initialState = {
  placa: "",
  data: "",
  descricao: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "placa":
      return { ...state, placa: payload };
    case "data":
      return { ...state, data: payload };
    case "descricao":
      return { ...state, descricao: payload };
    case "clear":
      return {
        ...state,
        placa: "",
        data: "",
        descricao: "",
      };
    default:
      throw new Error("Ação inválida: " + type);
  }
}

export default function Agendar() {
  const [{ placa, data, descricao }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const ipt1 = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    ipt1.current.focus();
    dispatch({ type: "clear" });
    console.log({ placa, data, descricao });
  }

  return (
    <div className={styles.Agendar}>
      <Form
        onSubmit={handleSubmit}
        className={styles.AgendarForm}
        title="Agendamento de serviço"
      >
        <div className={styles.FieldContainer}>
          <Field
            inputRef={ipt1}
            type="placa"
            labelClassName={styles.AgendarField}
            label="Placa"
            dispatch={dispatch}
            value={placa}
          />
          <Field
            labelClassName={`${styles.AgendarField} ${styles.Date}`}
            dispatch={dispatch}
            value={data}
            label="Data"
            type="data"
            inputType="date"
          />
          <TextField dispatch={dispatch} value={descricao} />
        </div>
        <span className={styles.Diviser}></span>
        <SubmitContainer />
      </Form>
    </div>
  );
}
function TextField({ value, dispatch }) {
  return (
    <label className={`${styles.AgendarField} ${styles.Text}`}>
      <span>Descrição:</span>
      <textarea
        className={styles.TextField}
        value={value}
        onChange={(e) =>
          dispatch({ type: "descricao", payload: e.target.value })
        }
      />
    </label>
  );
}

function SubmitContainer() {
  return (
    <div className={styles.SubmitContainer}>
      <span>Valor estimado: R$15.000,00</span>
      <button className={`form-btn ${styles.FormBtn}`}>
        Confirmar Agendamento
      </button>
    </div>
  );
}
