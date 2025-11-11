const BaseUrl = import.meta.env.VITE_BASE_URL;

import axios from "axios";

async function CadastrarServico(body) {
  const res = await axios.post(`${BaseUrl}/agendamentos/cadastrar`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { res };
}

async function ConsultarServicos() {
  const res = await axios.get(`${BaseUrl}/agendamentos/buscar`);

  return { res };
}

export { CadastrarServico, ConsultarServicos };
