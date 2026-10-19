import { useRef } from "react";
import type { ChangeEvent } from "react";
import { Form, useLocation, useSearchParams, useSubmit } from "react-router";

import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const timer = useRef<number | undefined>(undefined);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const form = event.currentTarget.form;

    window.clearTimeout(timer.current);

    if (!form) {
      return;
    }

    timer.current = window.setTimeout(() => {
      submit(form, { replace: true });
    }, 300);
  }

  return (
    <Form
      role="search"
      action={pathname}
      className={styles.search}
      onSubmit={() => window.clearTimeout(timer.current)}
    >
      <i className={`bi bi-search ${styles.icon}`} aria-hidden="true" />
      <input
        type="search"
        name="q"
        className={styles.input}
        placeholder="Pesquisar cliente, veículo, placa..."
        aria-label="Pesquisar cliente, veículo, placa ou serviço"
        autoComplete="off"
        defaultValue={searchParams.get("q") ?? ""}
        onChange={handleChange}
      />
    </Form>
  );
}
