const BaseUrl = import.meta.env.VITE_BASE_URL;

import axios from "axios";
import { toast } from "react-toastify";

async function CadastroUsuario(body) {
  try {
    return await axios
      .post(`${BaseUrl}/usuarios/usuarios`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { data } = res;
        const { message, user } = data;

        if (!user) throw new Error(message);

        toast.success(message);
        return { user, message, resOk: true };
      });
  } catch (res) {
    const message = res.response.data.message;
    toast.error(message);
    return { user: "", message, resOk: false };
  }
}

async function LoginUsuario(body) {
  try {
    return await axios
      .post(`${BaseUrl}/usuarios/login`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { data } = res;
        const { message, user } = data;

        if (!user) throw new Error(message);

        toast.success(message);
        return { user, message, resOk: true };
      });
  } catch (res) {
    const message = res.response.data.message;
    toast.error(message);
    return { user: "", message, resOk: false };
  }
}

async function ResetSenha(body) {
  try {
    return await axios
      .post(`${BaseUrl}/usuarios/recuperarsenha`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const {
          data: { message },
        } = res;

        if (res.statusText !== "OK") throw new Error(message);

        toast.success(message);
        return { message, success: true };
      });
  } catch (res) {
    const message = res.response.data.message;
    toast.error(message);
    return { message, success: false };
  }
}

export { CadastroUsuario, LoginUsuario, ResetSenha };
