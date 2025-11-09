import { useReducer, useRef } from "react";

import Form, { Field } from "../../../Components/Form/Form";

import styles from "./Veiculos.module.css";

import { CadastroVeiculo } from "../../../Services/Veiculos";

const initialState = {
  placa: "",
  modelo: "",
  idCliente: "",
  nomeCliente: "",
  cor: "",
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "placa":
      return { ...state, placa: payload };
    case "modelo":
      return { ...state, modelo: payload };
    case "idCliente":
      return { ...state, idCliente: payload };
    case "nomeCliente":
      return { ...state, nomeCliente: payload };
    case "cor":
      return { ...state, cor: payload };

    case "clear":
      return {
        ...state,
        idCliente: "",
        nomeCliente: "",
        cor: "",
        modelo: "",
        placa: "",
      };
    default:
      throw new Error("Ação inválida: " + type);
  }
}

export default function Cad_Veiculo() {
  const [{ idCliente, nomeCliente, cor, modelo, placa }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const ipt1 = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const body = { idCliente, nomeCliente, cor, modelo, placa };

    const { req } = await CadastroVeiculo(body);

    const msg = await req.json();

    console.log(msg.message);

    if (!req.ok) {
      return;
    }

    dispatch({ type: "clear" });
    ipt1.current.focus();
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
          <IdField ref={ipt1} value={idCliente} dispatch={dispatch} />
          <Field
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

function IdField({ value, ref, dispatch }) {
  return (
    <label className={styles.IdInput}>
      <span>Id_Cliente: </span>
      <input
        ref={ref}
        value={value}
        onChange={(e) =>
          dispatch({ type: "idCliente", payload: e.target.value })
        }
        type="text"
      />
    </label>
  );
}
