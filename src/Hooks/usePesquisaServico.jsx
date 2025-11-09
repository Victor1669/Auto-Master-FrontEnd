import { useState, useEffect } from "react";

import { ConsultarServicos } from "../Services/Servicos";

function usePesquisaServicos() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    async function handlePesquisa() {
      setIsLoading(true);

      const { res, data } = await ConsultarServicos();

      if (!res.ok) return;

      setServicos(
        data.filter((s) =>
          s.descricao.toLowerCase().includes(query.toLowerCase())
        )
      );

      setIsLoading(false);
    }
    handlePesquisa();
  }, [query]);

  return { query, setQuery, isLoading, servicos };
}

export { usePesquisaServicos };
