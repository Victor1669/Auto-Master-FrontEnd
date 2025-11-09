import { useReducer } from "react";

function useUsuario() {
  const initialState = {
    email: "",
    senha: "",
  };

  function reducer(state, action) {
    const { type, payload } = action;

    switch (type) {
      case "email":
        return { ...state, email: payload };
      case "senha":
        return { ...state, senha: payload };
      default:
        throw new Error("Erro ao fazer login!");
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}

export { useUsuario };
