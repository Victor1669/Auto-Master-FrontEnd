import { usePesquisaServicos } from "../../Hooks/usePesquisaServico";

import { ServicoLista } from "./ListaServicos/ListaServicos";

import { DateFormatter } from "../../Utils/DateFormatter";

export default function Home() {
  const { servicos } = usePesquisaServicos();

  const servicosHoje = servicos.filter((s) => {
    const dataFormatada = DateFormatter(new Date(s.data));
    const dataHoje = DateFormatter(new Date());

    return dataHoje == dataFormatada;
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "start",
      }}
    >
      <h3 style={{ marginTop: 20, marginBottom: 20 }}>Serviços de Hoje</h3>
      {servicosHoje.length ? (
        <ServicoLista servicos={servicosHoje} />
      ) : (
        "Não há serviços para hoje!"
      )}
    </div>
  );
}
