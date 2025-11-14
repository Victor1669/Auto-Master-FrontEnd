import { useNavigate } from "react-router-dom";
import { useUsuario } from "../../../Hooks/useUsuario.js";

import Form, { Field } from "../../../Components/Form/Form.jsx";

import { ResetSenha } from "../../../Services/Usuario.js";

import styles from "./ResetPassword.module.css";

export default function Reset() {
  const { state, dispatch } = useUsuario();

  const { email, senha, erro, setErro } = state;

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !senha) return;

    const body = { email, novaSenha: senha };

    const { message, success } = await ResetSenha(body);

    if (success) {
      navigate("/login");
    } else setErro(message);
  }

  return (
    <div className={styles.Reset}>
      <Form
        onSubmit={handleSubmit}
        className={styles.ResetForm}
        title="Digite seu email e sua nova senha para enviarmos a nova senha:"
        btnText="Enviar"
        errorMessage={erro}
      >
        <Field label="Email:" type="email" value={email} dispatch={dispatch} />
        <Field
          label="Nova senha:"
          type="senha"
          value={senha}
          dispatch={dispatch}
          inputType="password"
        />
      </Form>
    </div>
  );
}
