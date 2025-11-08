const BaseUrl = import.meta.env.VITE_BASE_URL;

import { useState, useEffect } from "react";

import styles from "./ListaServicos.module.css";

const initialData = [
  {
    cliente: "Pietro Santos Miranda",
    veiculo: "Porsche GT3 RS - Vermelha",
    data: "21/09/2025",
    previsaoEntrega: 21,
    descricao: "Batida no parachoque",
    status: "concluído",
  },
  {
    cliente: "Victor Pereira",
    veiculo: "Uno com escada",
    data: "25/09/2025",
    previsaoEntrega: 10,
    descricao: "Problema de BIOS",
    status: "Não iniciado",
  },
  {
    cliente: "Victor Fernandes Baltazar",
    veiculo: "Mustang",
    data: "30/09/2025",
    previsaoEntrega: 14,
    descricao: "abcdefghijklmnopqrstuvwxyz",
    status: "pendente",
  },
];

export default function ListaServicos() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(initialData);

  useEffect(() => {
    if (!query.length) {
      setResults(initialData);
      return;
    }

    setResults(
      initialData.filter((s) =>
        s.cliente.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  return (
    <div className={styles.Servicos}>
      <SearchBar query={query} setQuery={setQuery} />
      <ServicoLista results={results} />
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
function ServicoLista({ results }) {
  return (
    <ul>
      {results.map((servico, index) => (
        <ServicoItem key={index} servico={servico} />
      ))}
    </ul>
  );
}
function ServicoItem({ servico }) {
  const { cliente, veiculo, data, previsaoEntrega, descricao, status } =
    servico;

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
          <span>Cliente: {cliente}</span>
          <span>Veículo: {veiculo}</span>
          <span>Data de Solicitação: {data}</span>
          <span>Previsão de entrega: {previsaoEntrega}</span>
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
