import { useNavigate } from "react-router-dom";

import Form, { Field } from "../../Components/Form/Form";
import { CarBackgroundEnter } from "../../Components/CarBackground/CarBackground";

import { CadastroUsuario } from "../../Services/Usuario";

import { useUsuario } from "../../Hooks/useUsuario";
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

    await CadastroUsuario(state)
      .then(({ res: { data } }) => {
        login(data);
        navigate("/v1");
      })
      .catch((res) => setErro(res.response.data.message));
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
