const BaseUrl = import.meta.env.VITE_BASE_URL;

export async function CadastroUsuario(corpo) {
  try {
    const body = JSON.stringify(corpo);

    const req = await fetch(`${BaseUrl}/usuarios/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    return { res: req };
  } catch (error) {
    return { res: error };
  }
}

export async function LoginUsuario(corpo) {
  try {
    const body = JSON.stringify(corpo);

    const req = await fetch(`${BaseUrl}/usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    return { res: req };
  } catch (error) {
    return { res: error };
  }
}
