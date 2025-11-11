const BaseUrl = import.meta.env.VITE_BASE_URL;

import axios from "axios";

async function CadastrarCliente(body) {
  const res = await axios.post(`${BaseUrl}/clientes/cadastrarCliente`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return { res };
}

export { CadastrarCliente };
