import { useState, useEffect } from "react";

import { ConsultarServicos } from "../Services/Servicos";

function usePesquisaServicos() {
  const [query, setQuery] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [servicos, setServicos] = useState([]);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    async function handlePesquisa() {
      setMensagem("Carregando...");
      setIsLoading(true);

      await ConsultarServicos()
        .then(({ res: { data } }) => {
          setServicos(
            data.filter((s) =>
              s[tipoFiltro || "descricao"]
                .toLowerCase()
                .includes(query.toLowerCase())
            )
          );
          setMensagem("");
        })
        .catch(({ res }) => {
          console.log(res);
          setMensagem("Erro ao consultar dados!");
        })
        .finally(() => setIsLoading(false));
    }
    handlePesquisa();
  }, [query, tipoFiltro]);

  return {
    query,
    setQuery,
    mensagem,
    isLoading,
    servicos,
    tipoFiltro,
    setTipoFiltro,
  };
}

export { usePesquisaServicos };
