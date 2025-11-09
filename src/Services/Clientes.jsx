const BaseUrl = import.meta.env.VITE_BASE_URL;

async function CadastrarCliente(corpo) {
  const body = JSON.stringify(corpo);

  const res = await fetch(`${BaseUrl}/clientes/cadastrarCliente`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json();

  return { res, data };
}

export { CadastrarCliente };
