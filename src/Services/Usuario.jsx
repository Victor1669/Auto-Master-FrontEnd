const BaseUrl = import.meta.env.VITE_BASE_URL;

export async function CadastroUsuario(corpo) {
  const body = JSON.stringify(corpo);

  const req = await fetch(`${BaseUrl}/usuarios/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  return { req };
}

export async function LoginUsuario(corpo) {
  const body = JSON.stringify(corpo);

  const req = await fetch(`${BaseUrl}/usuarios/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  return { req };
}
