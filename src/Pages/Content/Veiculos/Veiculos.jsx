const BaseUrl = import.meta.env.VITE_BASE_URL;

import { useReducer } from "react";

import Form, { Field } from "../../../Components/Form/Form";
import { useRef } from "react";

import styles from "./Veiculos.module.css";

const initialState = {
  id: "",
  marca: "",
  modelo: "",
  ano: "",
  placa: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "id-cliente":
      return { ...state, id: payload };
    case "marca":
      return { ...state, marca: payload };
    case "modelo":
      return { ...state, modelo: payload };
    case "ano":
      return { ...state, ano: payload };
    case "placa":
      return { ...state, placa: payload };
    case "clear":
      return { ...state, id: "", marca: "", modelo: "", ano: "", placa: "" };
    default:
      throw new Error("Ação inválida: " + type);
  }
}

export default function Cadastro_Veiculo() {
  const [{ id, marca, modelo, ano, placa }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const ipt1 = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "clear" });
    ipt1.current.focus();

    console.log({ id, marca, modelo, ano, placa });
  }

  return (
    <div className={styles.Veiculos}>
      <Form
        onSubmit={handleSubmit}
        className={styles.VeiculosForm}
        title="Cadastrar veículos"
        btnText="Cadastrar"
        btnClassName={styles.FormBtn}
      >
        <div className={styles.pt1}>
          <IdField ref={ipt1} value={id} dispatch={dispatch} />
          <Field label="Marca" value={marca} dispatch={dispatch} type="marca" />
          <Field
            label="Modelo"
            value={modelo}
            dispatch={dispatch}
            type="modelo"
          />
          <Field label="Ano" value={ano} dispatch={dispatch} type="ano" />
          <Field label="Placa" value={placa} dispatch={dispatch} type="placa" />
        </div>
      </Form>
    </div>
  );
}

function IdField({ value, ref, dispatch }) {
  return (
    <label className={styles.IdInput}>
      <span>Id_Cliente: </span>
      <input
        ref={ref}
        value={value}
        onChange={(e) =>
          dispatch({ type: "id-cliente", payload: e.target.value })
        }
        type="text"
      />
    </label>
  );
}
