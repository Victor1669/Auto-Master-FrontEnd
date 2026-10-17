import { data, redirect } from "react-router";
import type { ActionFunctionArgs } from "react-router";

import { clearSession, login } from "../services/auth";

export type LoginActionData = {
  email: string;
  errors: {
    email?: string;
    password?: string;
    form?: string;
  };
};

export async function loginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const remember = formData.get("remember") === "on";

  const errors: LoginActionData["errors"] = {};

  if (!email) {
    errors.email = "Informe o e-mail.";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "E-mail inválido.";
  }

  if (!password) {
    errors.password = "Informe a senha.";
  }

  if (Object.keys(errors).length > 0) {
    return data<LoginActionData>({ email, errors }, { status: 400 });
  }

  try {
    await login({ email, password, remember });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Não foi possível entrar. Tente novamente.";

    return data<LoginActionData>(
      { email, errors: { form: message } },
      { status: 401 },
    );
  }

  return redirect("/dashboard");
}

export async function logoutAction() {
  clearSession();
  return redirect("/");
}
