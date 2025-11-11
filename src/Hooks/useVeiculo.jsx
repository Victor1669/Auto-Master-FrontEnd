import { useState, useReducer } from "react";

function useVeiculo() {
  const initialState = {
    placa: "",
    modelo: "",
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
      case "nomeCliente":
        return { ...state, nomeCliente: payload };
      case "cor":
        return { ...state, cor: payload };

      case "clear":
        return {
          ...state,
          nomeCliente: "",
          cor: "",
          modelo: "",
          placa: "",
        };
      default:
        throw new Error("Ação inválida: " + type);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const [erro, setErro] = useState("");

  return { state: { ...state, erro, setErro }, dispatch };
}

export { useVeiculo };
