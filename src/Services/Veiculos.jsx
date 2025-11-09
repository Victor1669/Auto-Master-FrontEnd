const BaseUrl = import.meta.env.VITE_BASE_URL;

async function CadastroVeiculo(corpo) {
  const body = JSON.stringify(corpo);

  const res = await fetch(`${BaseUrl}/veiculos/cadastrarVeiculo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = res.json();

  return { res, data };
}

export { CadastroVeiculo };
