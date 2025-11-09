const BaseUrl = import.meta.env.VITE_BASE_URL;

async function CadastroUsuario(corpo) {
  const body = JSON.stringify(corpo);

  const res = await fetch(`${BaseUrl}/usuarios/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json();

  return { res, data };
}

async function LoginUsuario(corpo) {
  const body = JSON.stringify(corpo);

  const res = await fetch(`${BaseUrl}/usuarios/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json();

  return { res, data };
}

export { CadastroUsuario, LoginUsuario };
