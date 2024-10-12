export interface PaginacaoProps {
    paginaAtual: number;
    totalPaginas: number;
    irParaPagina: (pagina: number) => void;
}