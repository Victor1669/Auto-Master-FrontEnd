import { useReducer } from "react";

function useClientes() {
  const initialState = {
    nome: "",
    cpf: "",
    telefone: "",
  };

  function reducer(state, action) {
    const { type, payload } = action;

    switch (type) {
      case "nome":
        return { ...state, nome: payload };
      case "cpf":
        return { ...state, cpf: payload };
      case "telefone":
        return { ...state, telefone: payload };
      case "clear":
        return { ...state, nome: "", cpf: "", telefone: "" };
      default:
        throw new Error("Ação inválida: " + type);
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}

export { useClientes };
