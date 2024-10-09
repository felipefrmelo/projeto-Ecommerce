import Image from "next/image"
import { PaginacaoProps } from "@/src/core/paginacao/PaginacaoProps"


  export default function Setas({ paginaAtual, totalPaginas, irParaPagina }: PaginacaoProps){
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',

        }}>
            
           <button style={{
                    backgroundColor: 'black',
                    borderRadius: '8px',
                    height: '40px'
                }}
           onClick={() => irParaPagina(paginaAtual - 1)} disabled={paginaAtual === 1}><Image src="/anterior.svg" height={40} width={40} alt="Seta para esquerda" /></button>
           
           
           <button style={{
                    backgroundColor: 'black',
                    borderRadius: '8px',
                    height: '40px'
           }}
           onClick={() => irParaPagina(paginaAtual + 1)} disabled={paginaAtual === totalPaginas}><Image src="/proximo.svg" height={40} width={40} alt="Seta para direita" /></button>

        </div>
    )
}