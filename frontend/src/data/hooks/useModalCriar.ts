import { Pedido } from "@/src/core";
import { useEffect, useState } from 'react';
export function useModal({ onSubmit }: { onSubmit: (pedido: Pedido) => void }) {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [pedido, setPedido] = useState<Pedido>({
        id: 0, 
        nomeCliente: '',
        statusPedido: 'pendente', 
        dataPedido: '',
        itensPedidos: {
            nomeProduto: '',
            qntde: 0,
            valorUnitario: 0,
        },
        valorSubtotal: 0,
        valorFrete: 0,
        valorTotal: 0
    });

    useEffect(() => {
        const subtotal = pedido.itensPedidos.qntde * pedido.itensPedidos.valorUnitario;
        const total = subtotal + pedido.valorFrete;
        setPedido((prev) => ({ ...prev, valorSubtotal: subtotal, valorTotal: total }));
    }, [pedido.itensPedidos.qntde, pedido.itensPedidos.valorUnitario, pedido.valorFrete]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setPedido((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit() {
    // Essa validação ta repentindo no modal de atualizar pedido, mas aqui esta com erro
    // permitindo que o pedido seja criado com valores negativos
    // Essa validação poderia ser feita em um só lugar como por exemplo no core Pedido.ts
        if (pedido.nomeCliente === '' || 
            pedido.itensPedidos.nomeProduto === '' || 
            pedido.itensPedidos.qntde === 0 || 
            pedido.itensPedidos.valorUnitario === 0) {
            alert('Preencha os campos obrigatórios');
        
            return;
        }
        onSubmit(pedido);
        setSuccessMessage("Pedido criado com sucesso!"); 

    }

    return {
        pedido,
        setPedido,
        handleSubmit,
        handleChange,
        successMessage
    };

}
