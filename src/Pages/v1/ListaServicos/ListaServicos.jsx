import { useRef, useEffect } from "react";
import { usePesquisaServicos } from "../../../Hooks/usePesquisaServico.js";

import { DateFormatter } from "../../../Utils/DateFormatter";

import styles from "./ListaServicos.module.css";

export default function ListaServicos() {
  const {
    isLoading,
    servicos,
    query,
    setQuery,
    mensagem,
    tipoFiltro,
    setTipoFiltro,
  } = usePesquisaServicos();

  return (
    <div className={styles.Servicos}>
      <SearchBar query={query} setQuery={setQuery} />
      <FilterContainer tipoFiltro={tipoFiltro} setTipoFiltro={setTipoFiltro} />
      {!isLoading ? (
        <ServicoLista servicos={servicos} mensagem={mensagem} />
      ) : (
        <>{mensagem}</>
      )}
    </div>
  );
}

function SearchBar({ query, setQuery }) {
  const ipt1 = useRef(null);

  useEffect(() => {
    ipt1.current.focus();
  }, []);

  return (
    <div className={styles.SearchContainer}>
      <input
        ref={ipt1}
        className={styles.SearchBar}
        type="search"
        placeholder="Buscar por um agendamento"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

function FilterContainer({ tipoFiltro, setTipoFiltro }) {
  const tiposFiltro = [
    ["Nome do cliente", "nomeCliente"],
    ["Modelo do veículo", "modelo"],
    ["Descrição", "descricao"],
    ["Status", "status"],
  ];
  return (
    <select
      className={styles.Filter}
      value={tipoFiltro || "*"}
      onChange={(e) => setTipoFiltro(e.target.value)}
    >
      <option value="*" disabled>
        Tipo de Filtro
      </option>
      {tiposFiltro.map(([texto, valor]) => (
        <option key={texto} value={valor}>
          {texto}
        </option>
      ))}
    </select>
  );
}

export function ServicoLista({ servicos, mensagem }) {
  return (
    <ul className={styles.Lista}>
      {servicos.length ? (
        servicos.map((servico, index) => (
          <ServicoItem key={index} servico={servico} />
        ))
      ) : (
        <p>{mensagem || "Não há resultados!"}</p>
      )}
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
  const dataFormatada = DateFormatter(
    diaEntrega.setDate(diaEntrega.getDate() + 1)
  );

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
          <span>
            Previsão de entrega:{" "}
            {previsaoEntrega > 0
              ? previsaoEntrega + " dias"
              : previsaoEntrega < 1 && "Hoje"}
          </span>
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
