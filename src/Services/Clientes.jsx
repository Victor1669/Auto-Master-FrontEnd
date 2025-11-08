const BaseUrl = import.meta.env.VITE_BASE_URL;

export async function CadastrarCliente(corpo) {
  const body = JSON.stringify(corpo);

  const req = await fetch(`${BaseUrl}/clientes/cadastrarCliente`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  return {req};
}
