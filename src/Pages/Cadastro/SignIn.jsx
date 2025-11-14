import { useNavigate } from "react-router-dom";
import { useUsuario } from "../../Hooks/useUsuario";

import Form, { Field } from "../../Components/Form/Form";
import { CarBackgroundEnter } from "../../Components/CarBackground/CarBackground";

import { CadastroUsuario } from "../../Services/Usuario.js";

import { useAuth } from "../../Context/AuthContext";

import styles from "./SignIn.module.css";

// FUNÇÃO PRINCIPAL
export default function Login() {
  const { login } = useAuth();
  const { state, dispatch } = useUsuario();
  const { email, senha, erro, setErro } = state;

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const { user, message, resOk } = await CadastroUsuario({ email, senha });

    if (resOk && user) {
      login(user);
      navigate("/v1");
    } else setErro(message);
  }

  return (
    <div className={styles.Signin}>
      <header>
        <h2 className="EnterTitle">AUTOMASTER</h2>
        <CarBackgroundEnter />
      </header>

      <Form
        className={styles.EnterForm}
        onSubmit={handleSubmit}
        btnText="Cadastrar"
        errorMessage={erro}
      >
        <Field
          labelClassName="field"
          type="email"
          value={email}
          dispatch={dispatch}
          label="Email"
        />
        <Field
          labelClassName="field"
          type="senha"
          inputType="password"
          value={senha}
          dispatch={dispatch}
          label="Senha"
        />
      </Form>
    </div>
  );
}
