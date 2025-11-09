const BaseUrl = import.meta.env.VITE_BASE_URL;

async function CadastroVeiculo(corpo) {
  const body = JSON.stringify(corpo);

  const req = await fetch(`${BaseUrl}/veiculos/cadastrarVeiculo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  return { req };
}

function useVeiculo() {}

export { CadastroVeiculo, useVeiculo };
