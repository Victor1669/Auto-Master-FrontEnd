const BaseUrl = import.meta.env.VITE_BASE_URL;

import axios from "axios";

async function CadastroUsuario(body) {
  const res = await axios.post(`${BaseUrl}/usuarios/usuarios`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { res };
}

async function LoginUsuario(body) {
  const res = await axios.post(`${BaseUrl}/usuarios/login`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { res };
}

export { CadastroUsuario, LoginUsuario };
