import Image from "next/image";
import { PaginacaoProps } from "@/src/core/paginacao/PaginacaoProps";
import styles from './Setas.module.css';

export default function Setas({ paginaAtual, totalPaginas, irParaPagina }: PaginacaoProps) {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => irParaPagina(paginaAtual - 1)}
        disabled={paginaAtual === 1}
      >
        <Image src="/anterior.svg" height={40} width={40} alt="Seta para esquerda" />
      </button>

      <button
        className={styles.button}
        onClick={() => irParaPagina(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
      >
        <Image src="/proximo.svg" height={40} width={40} alt="Seta para direita" />
      </button>
    </div>
  );
}
