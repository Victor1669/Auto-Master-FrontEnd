import { usePesquisaServicos } from "../../../Hooks/usePesquisaServico";

import { DateFormatter } from "../../../Utils/DateFormatter";

import styles from "./ListaServicos.module.css";

export default function ListaServicos() {
  const { query, setQuery, isLoading, servicos } = usePesquisaServicos();

  return (
    <div className={styles.Servicos}>
      <SearchBar query={query} setQuery={setQuery} />
      {!isLoading ? <ServicoLista servicos={servicos} /> : <></>}
    </div>
  );
}

function SearchBar({ query, setQuery }) {
  return (
    <div className={styles.SearchContainer}>
      <input
        className={styles.SearchBar}
        type="search"
        placeholder="Buscar por um agendamento"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

function ServicoLista({ servicos }) {
  return (
    <ul>
      {servicos.map((servico, index) => (
        <ServicoItem key={index} servico={servico} />
      ))}
    </ul>
  );
}

function ServicoItem({ servico }) {
  const { nomeCliente, modelo, data, descricao, status } = servico;

  // CÁLCULO DE QUANTOS DIAS FALTAM PRA ENTREGA
  const hoje = new Date();
  const diaEntrega = new Date(data);
  const previsaoEntrega = Math.floor(
    (diaEntrega - hoje) / (1000 * 60 * 60 * 24)
  );

  // CONVERSÃO DA DATA
  const dataFormatada = DateFormatter(new Date(data));

  const statusEmoji =
    status === "concluído" ? "🟢" : status === "pendente" ? "🟡" : "🔴";

  const descFormatado = descricao.split("").slice(0, 20).join("");

  return (
    <li className={styles.ListaItem}>
      <figure>
        <img src="/src/assets/tab-agendar.png" alt="" />
      </figure>
      <div className={styles.ItemContent}>
        <p>
          <span>Cliente: {nomeCliente}</span>
          <span>Veículo: {modelo}</span>
          <span>Data de Solicitação: {dataFormatada}</span>
          <span>Previsão de entrega: {previsaoEntrega} dias</span>
          <span>
            Descrição: {descFormatado}
            {descricao.length > 20 ? "..." : ""}
          </span>
        </p>
        <div className={styles.ItemStatus}>
          <span
            style={{
              backgroundColor: "#999999",
              padding: 10,
              borderRadius: 10,
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            Status: {statusEmoji} {status}
          </span>
          <div style={{ display: "inherit", flexDirection: "inherit", gap: 5 }}>
            <span>🟢 Concluído</span>
            <span>🟡 Pendente</span>
            <span>🔴 Não iniciado</span>
          </div>
        </div>
      </div>
    </li>
  );
}
