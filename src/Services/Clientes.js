const BaseUrl = import.meta.env.VITE_BASE_URL;

import axios from "axios";

import { toast } from "react-toastify";

async function CadastrarCliente(body) {
  try {
    return await axios
      .post(`${BaseUrl}/clientes/cadastrarCliente`, body, {
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

export { CadastrarCliente };
