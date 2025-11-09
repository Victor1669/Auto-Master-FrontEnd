import { useReducer } from "react";

const BaseUrl = import.meta.env.VITE_BASE_URL;

async function CadastroUsuario(corpo) {
  const body = JSON.stringify(corpo);

  const res = await fetch(`${BaseUrl}/usuarios/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json();

  return { res, data };
}

async function LoginUsuario(corpo) {
  const body = JSON.stringify(corpo);

  const res = await fetch(`${BaseUrl}/usuarios/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json();

  return { res, data };
}

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

export { CadastroUsuario, LoginUsuario, useUsuario };
