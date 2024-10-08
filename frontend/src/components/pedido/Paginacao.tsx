// components/pedido/Paginacao.tsx

interface PaginacaoProps {
    paginaAtual: number;
    totalPaginas: number;
    irParaPagina: (pagina: number) => void;
  }
  
  export default function Paginacao({ paginaAtual, totalPaginas, irParaPagina }: PaginacaoProps) {
    return (
      <div>
        <button onClick={() => irParaPagina(paginaAtual - 1)} disabled={paginaAtual === 1}>
          Anterior
        </button>
        <button onClick={() => irParaPagina(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}>
          Próximo
        </button>
      </div>
    );
  }
  