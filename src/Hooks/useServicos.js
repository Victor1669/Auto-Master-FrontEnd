import { useState, useReducer } from "react";

function useServicos() {
  const initialState = {
    placa: "",
    data: "",
    hora: "",
    preco: "",
    descricao: "",
  };

  function reducer(state, action) {
    const { type, payload } = action;

    switch (type) {
      case "placa":
        return { ...state, placa: payload };
      case "data":
        return { ...state, data: payload };
      case "hora":
        return { ...state, hora: payload };
      case "preco":
        return { ...state, preco: payload };
      case "descricao":
        return { ...state, descricao: payload };

      case "clear":
        return {
          ...state,
          placa: "",
          data: "",
          hora: "",
          preco: "",
          descricao: "",
        };
      default:
        throw new Error("Ação inválida: " + type);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const [erro, setErro] = useState();

  return { state: { ...state, erro, setErro }, dispatch };
}

export { useServicos };
