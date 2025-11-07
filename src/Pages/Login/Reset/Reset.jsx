import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Form from "../../../Components/Form/Form";

import styles from "./Reset.module.css";

export default function Reset() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    console.log(email);
    navigate("/login");
  }

  return (
    <div className={styles.Reset}>
      <Form
        onSubmit={handleSubmit}
        className={styles.ResetForm}
        title="Digite seu email para enviarmos a nova senha:"
        btnText="Enviar"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form>
    </div>
  );
}
