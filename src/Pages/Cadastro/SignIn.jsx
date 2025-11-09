import { useNavigate } from "react-router-dom";

import Form, { Field } from "../../Components/Form/Form";

import { CadastroUsuario } from "../../Services/Usuario";

import { useUsuario } from "../../Hooks/useUsuario";

import styles from "./SignIn.module.css";

// FUNÇÃO PRINCIPAL
export default function Login() {
  const { state, dispatch } = useUsuario();
  const { email, senha } = state;
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const { res, data } = await CadastroUsuario(state);

    console.log(data.message);

    if (!res.ok) {
      return;
    }

    navigate("/v1");
  }

  return (
    <div className={styles.Signin}>
      <header>
        <h1>AUTOMASTER</h1>
        <img
          className="red-car enter"
          src="/src/assets/red-car.png"
          alt="red car"
        />
        <span className="detail one"></span>
        <span className="detail two"></span>
      </header>

      <Form
        className={styles.EnterForm}
        onSubmit={handleSubmit}
        btnText="Cadastrar"
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
