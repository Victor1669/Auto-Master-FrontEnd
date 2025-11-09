import { useReducer } from "react";

function useVeiculo() {
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

  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}

export { useVeiculo };
