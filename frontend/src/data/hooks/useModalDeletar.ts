import { useState } from 'react';

export function useModalDeletar({ onDelete }: { onDelete: (id: number) => void }) {
    const [pedidoId, setPedidoId] = useState<number | null>(null);

    function handleDelete() {
        if (pedidoId !== null && pedidoId > 0) {
            onDelete(pedidoId);
        } else {
            alert('Por favor, insira um ID de pedido válido.');
        }
    }

    return {
        pedidoId,
        setPedidoId,
        handleDelete,
    };
}
