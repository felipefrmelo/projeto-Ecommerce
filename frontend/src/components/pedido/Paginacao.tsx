import Setas from "../shared/Setas";
import { PaginacaoProps } from "@/src/core/paginacao/PaginacaoProps";

export default function Paginacao({ paginaAtual, totalPaginas, irParaPagina }: PaginacaoProps) {
    return (
        <div>
            <Setas 
                paginaAtual={paginaAtual} 
                totalPaginas={totalPaginas} 
                irParaPagina={irParaPagina} 
            />
        </div>
    );
}
