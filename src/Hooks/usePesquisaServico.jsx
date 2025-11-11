import { useState, useEffect } from "react";

import { ConsultarServicos } from "../Services/Servicos";

function usePesquisaServicos() {
  const [query, setQuery] = useState("");
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
              s.descricao.toLowerCase().includes(query.toLowerCase())
            )
          );
        })
        .catch(({ res }) => {
          console.log(res);
          setMensagem("Erro");
        })
        .finally(() => setIsLoading(false));
    }
    handlePesquisa();
  }, [query]);

  return { query, setQuery, mensagem, isLoading, servicos };
}

export { usePesquisaServicos };
