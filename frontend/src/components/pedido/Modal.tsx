import { useState, useEffect } from 'react';
import { Pedido } from '@/src/core';

export default function CriarPedidoModal({ onSubmit }: { onSubmit: (pedido: Pedido) => void }) {
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
        if (pedido.nomeCliente === '' || 
            pedido.itensPedidos.nomeProduto === '' || 
            pedido.itensPedidos.qntde === 0 || 
            pedido.itensPedidos.valorUnitario === 0) {
            alert('Campos obrigatórios estão faltando');
            return;
        }
        onSubmit(pedido);
    }

    return (
        <div>
            <h2>Criar Pedido</h2>

            <input 
                name="nomeCliente" 
                value={pedido.nomeCliente} 
                onChange={handleChange} 
                placeholder="Nome do Cliente" 
            />

            <input 
                type="date" 
                name="dataPedido" 
                value={pedido.dataPedido} 
                onChange={handleChange} 
                placeholder="Data do Pedido" 
            />

            <input 
                name="nomeProduto" 
                value={pedido.itensPedidos.nomeProduto} 
                onChange={(e) => 
                    setPedido(prev => ({ 
                        ...prev, 
                        itensPedidos: { ...prev.itensPedidos, nomeProduto: e.target.value } 
                    }))
                } 
                placeholder="Nome do Produto" 
            />

            <input 
                type="number" 
                name="qntde"
                value={pedido.itensPedidos.qntde} 
                onChange={(e) => 
                    setPedido(prev => ({ 
                        ...prev, 
                        itensPedidos: { ...prev.itensPedidos, qntde: Number(e.target.value) } 
                    }))
                } 
                placeholder="Quantidade" 
                min="1"
            />

            <input 
                type="number"  
                name="valorUnitario" 
                value={pedido.itensPedidos.valorUnitario} 
                onChange={(e) => 
                    setPedido(prev => ({ 
                        ...prev, 
                        itensPedidos: { ...prev.itensPedidos, valorUnitario: Number(e.target.value) } 
                    }))
                } 
                placeholder="Valor Unitário" 
                min="0"
                step="0.01"
            />

            <input 
                type="number" 
                name="valorSubtotal" 
                value={pedido.valorSubtotal} 
                readOnly 
                placeholder="Subtotal"
            />

            <input 
                type="number" 
                name="valorFrete" 
                value={pedido.valorFrete} 
                onChange={(e) => 
                    setPedido(prev => ({ ...prev, valorFrete: Number(e.target.value) }))
                } 
                placeholder="Frete" 
                min="0"
                step="0.01"
            />

            <input 
                type="number" 
                name="valorTotal" 
                value={pedido.valorTotal} 
                readOnly 
                placeholder="Total" 
            />

            <button onClick={handleSubmit}>Criar</button>
        </div>
    );
}
