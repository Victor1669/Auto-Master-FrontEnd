const BaseUrl = import.meta.env.VITE_BASE_URL;

async function CadastrarServico(corpo) {
  const body = JSON.stringify(corpo);

  const res = await fetch(`${BaseUrl}/agendamentos/cadastrar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await res.json();

  return { res, data };
}

async function ConsultarServicos() {
  const res = await fetch(`${BaseUrl}/agendamentos/buscar`);

  const data = await res.json();

  return { res, data };
}

export { CadastrarServico, ConsultarServicos };
