'use client';
import PedidosItem from "../../components/pedido/PedidosItem";
import Paginacao from "@/src/components/paginacao/Paginacao";
import usePedidos from "../../data/hooks/usePedidos";
import usePaginacao from "../../data/hooks/usePaginacao";
import { Pedido } from "@/src/core";
import AcoesPedido from "@/src/components/pedido/AcoesPedido";

export default function Home() {
    const { itensPedidos, criarPedido, deletarPedido, atualizarPedido, obterPedidoPorId  } = usePedidos();

    const itensPorPagina = 3;

    const {
        paginaAtual,
        totalPaginas,
        pedidosPaginados,
        irParaPagina
    } = usePaginacao(itensPedidos, itensPorPagina);

    const handleCreate = async (novoPedido: Pedido) => {
        await criarPedido(novoPedido);
    };

    const handleDelete = async (id: number) => {
        await deletarPedido(id);
    };

    const handleUpdate = async (pedidoAtualizado: Pedido) => {
        await atualizarPedido(pedidoAtualizado, pedidoAtualizado.id);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            width: '100%',
            alignItems: 'center'
        }}>
        
            <AcoesPedido
                onCreate={handleCreate}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
                obterPedidoPorId={obterPedidoPorId} 
            />
        
            {pedidosPaginados.map((pedido: Pedido) => (
                <PedidosItem key={pedido.id} pedido={pedido} />
            ))}

            <Paginacao
                paginaAtual={paginaAtual}
                totalPaginas={totalPaginas}
                irParaPagina={irParaPagina}
            />
        </div>
    );
}
