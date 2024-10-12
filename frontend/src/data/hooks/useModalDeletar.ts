import { useState } from 'react';
import usePedidos  from './usePedidos';

export function useModalDeletar({ onSubmit }: { onSubmit: (id: number) => void }) {
    const { obterPedidoPorId } = usePedidos(); 
    const [pedidoId, setPedidoId] = useState<number | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function handleDelete() {
        if (pedidoId) {
            const pedido = await obterPedidoPorId(pedidoId);
            if (pedido) {
                onSubmit(pedidoId);
                setSuccessMessage("Pedido deletado com sucesso!");
                setErrorMessage(null); 
            } else {
                setErrorMessage('Pedido não encontrado');
            }
        } 
    }

    return {
        pedidoId,
        setPedidoId,
        handleDelete,
        successMessage,
        errorMessage,
    };
}
