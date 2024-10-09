
import { useState } from "react";

export default function usePaginacao<T>(itens: T[], itensPorPagina: number) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const totalPaginas = Math.ceil(itens.length / itensPorPagina);

  const pedidosPaginados = itens.slice(
    (paginaAtual - 1) * itensPorPagina,
    paginaAtual * itensPorPagina
  );

  const irParaPagina = (pagina: number) => {
    if (pagina > 0 && pagina <= totalPaginas) {
      setPaginaAtual(pagina);
    }
  };

  return {
    paginaAtual,
    totalPaginas,
    pedidosPaginados,
    irParaPagina,
  };
}
