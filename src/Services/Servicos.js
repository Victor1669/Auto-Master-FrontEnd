const BaseUrl = import.meta.env.VITE_BASE_URL;

import axios from "axios";
import { toast } from "react-toastify";

async function CadastrarServico(body) {
  try {
    return await axios
      .post(`${BaseUrl}/agendamentos/cadastrar`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { data } = res;

        toast.success(data.message);
        return { message: "", success: true };
      });
  } catch (err) {
    const message = err.response.data.message;
    toast.error(message);

    return { message, success: false };
  }
}

async function ConsultarServicos() {
  const res = await axios.get(`${BaseUrl}/agendamentos/buscar`);

  return { res };
}

export { CadastrarServico, ConsultarServicos };
