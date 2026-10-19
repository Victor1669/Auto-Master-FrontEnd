import { useId, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Form as BsForm,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import { Form, useActionData, useNavigation } from "react-router";

import type { LoginActionData } from "../actions/auth";
import styles from "./LoginForm.module.css";

type LoginFormProps = {
  title: string;
};

export default function LoginForm({ title }: LoginFormProps) {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  const actionData = useActionData<LoginActionData>();
  const navigation = useNavigation();

  const isSubmitting = Boolean(
    navigation.state === "submitting" && navigation.formData?.has("email"),
  );
  const errors = actionData?.errors;

  return (
    <Card className={styles.card}>
      <Card.Body className="p-4">
        <Form method="post" className="d-grid gap-3">
          <div>
            <h2 className="h4 fw-semibold mb-1">{title}</h2>
            <p className="small text-body-secondary mb-0">
              Faça login para acessar o sistema.
            </p>
          </div>

          {errors?.form && (
            <Alert variant="danger" className="mb-0 py-2 small">
              {errors.form}
            </Alert>
          )}

          <BsForm.Group controlId={`${id}-email`}>
            <InputGroup hasValidation className={styles.group}>
              <InputGroup.Text className={styles.field}>
                <i className="bi bi-envelope" />
              </InputGroup.Text>
              <BsForm.Control
                type="email"
                name="email"
                className={`${styles.field} ${styles.control}`}
                placeholder="E-mail"
                aria-label="E-mail"
                autoComplete="email"
                defaultValue={actionData?.email}
                isInvalid={Boolean(errors?.email)}
                required
              />
              <BsForm.Control.Feedback type="invalid">
                {errors?.email}
              </BsForm.Control.Feedback>
            </InputGroup>
          </BsForm.Group>

          <BsForm.Group controlId={`${id}-password`}>
            <InputGroup hasValidation className={styles.group}>
              <InputGroup.Text className={styles.field}>
                <i className="bi bi-lock" />
              </InputGroup.Text>
              <BsForm.Control
                type={showPassword ? "text" : "password"}
                name="password"
                className={`${styles.field} ${styles.control}`}
                placeholder="Senha"
                aria-label="Senha"
                autoComplete="current-password"
                isInvalid={Boolean(errors?.password)}
                required
              />
              <Button
                type="button"
                className={styles.toggle}
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                <i
                  className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                />
              </Button>
              <BsForm.Control.Feedback type="invalid">
                {errors?.password}
              </BsForm.Control.Feedback>
            </InputGroup>
          </BsForm.Group>

          <BsForm.Check
            type="checkbox"
            className={styles.check}
            id={`${id}-remember`}
            name="remember"
            label="Lembrar-me"
          />

          <Button
            type="submit"
            className={`btn-automaster ${styles.submit}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Spinner size="sm" className="me-2" />
            ) : (
              <i className="bi bi-box-arrow-in-right me-2" />
            )}
            Entrar
          </Button>

          <Button
            type="button"
            variant="link"
            className={`${styles.link} mx-auto p-0`}
          >
            Esqueceu a senha?
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
