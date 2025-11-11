const BaseUrl = import.meta.env.VITE_BASE_URL;

import axios from "axios";

async function CadastroVeiculo(body) {
  const res = await axios.post(`${BaseUrl}/veiculos/cadastrarVeiculo`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { res };
}

export { CadastroVeiculo };
