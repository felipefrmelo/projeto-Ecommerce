'use client';
import { Pedido } from "@/src/core";
import styles from './PedidoItem.module.css';

export interface PedidoItemProps {
    pedido: Pedido;
}

export default function PedidoItem(props: PedidoItemProps) {
    const { pedido } = props;

    return ( 
        <div className={styles.pedidoItem}>
            <div className={styles.pedidoHeader}>
                <span>Número do Pedido: {pedido.id}</span>
                <span>Pedido feito em: {pedido.dataPedido}</span>
            </div>

            <div className={styles.pedidoDetails}>
                <div className={styles.clienteInfo}>
                    <span>
                        Cliente: <strong>{pedido.nomeCliente}</strong>
                    </span>
                </div>
                <div className={styles.status}>
                    <span>
                        Pedido {pedido.statusPedido}
                    </span>
                </div>
                <div className={styles.itemInfo}>
                    <div className={styles.itemDetails}>
                        <span>{pedido.itensPedidos.nomeProduto}</span>
                        <span>
                            Quantidade: <strong>{pedido.itensPedidos.qntde}</strong>
                        </span>
                    </div>
                    <span>R${pedido.itensPedidos.valorUnitario}</span>
                </div>

                <h2 className={styles.pagamentoTitle}>Pagamento</h2>
                <div className={styles.pagamentoDetails}>
                    <div className={styles.pagamentoRow}>
                        <span>Subtotal</span>
                        <span>R${pedido.valorSubtotal}</span>
                    </div>
                    <div className={styles.pagamentoRow}>
                        <span>Frete</span>
                        <span>R${pedido.valorFrete}</span>
                    </div>
                    <div className={`${styles.pagamentoRow} ${styles.total}`}>
                        <span>Total do pedido</span>
                        <span>R${pedido.valorTotal}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
