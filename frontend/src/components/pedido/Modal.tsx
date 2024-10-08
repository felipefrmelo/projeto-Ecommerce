import { useState } from 'react';
import { Pedido, itensPedido } from '@/src/core';

export default function CriarPedidoModal({ onSubmit }: { onSubmit: (pedido: Pedido) => void }) {
    const [pedido, setPedido] = useState<Pedido>({
        id: 0, // O backend gera o ID
        nomeCliente: '',
        statusPedido: 'pendente', // valor padrão
        dataPedido: '',
        itensPedidos: {
            nomeProduto: '',
            qntde:0,
            valorUnitario:0,

        },
        valorSubtotal: 0,
        valorFrete: 0,
        valorTotal: 0
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setPedido((prev) => ({ ...prev, [name]: value }));
    }



    function handleSubmit() {
        if (pedido.nomeCliente === '') { // Usar === para comparação
            alert('Campos obrigatórios estão faltando');
            return;
        }
        onSubmit(pedido);
    }

    return (
<div>
  <h2>Criar Pedido</h2>

  {/* Nome do Cliente */}
  <input 
    name="nomeCliente" 
    value={pedido.nomeCliente} 
    onChange={handleChange} 
    placeholder="Nome do Cliente" 
  />

  {/* Data do Pedido */}
  <input 
    type="date" 
    name="dataPedido" 
    value={pedido.dataPedido} 
    onChange={handleChange} 
    placeholder="Data do Pedido" 
  />

  {/* Produto */}
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

  {/* Quantidade */}
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
  />

  {/* Valor Unitário */}
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
  />

  {/* Valor Subtotal */}
  <input 
    type="number" 
    step="0.01" 
    name="valorSubtotal" 
    value={pedido.valorSubtotal} 
    onChange={handleChange} 
    placeholder="Subtotal" 
  />

  {/* Valor Frete */}
  <input 
    type="number" 
    step="0.01" 
    name="valorFrete" 
    value={pedido.valorFrete} 
    onChange={handleChange} 
    placeholder="Frete" 
  />

  {/* Valor Total */}
  <input 
    type="number" 
    step="0.01" 
    name="valorTotal" 
    value={pedido.valorTotal} 
    onChange={handleChange} 
    placeholder="Total" 
  />

  <button onClick={handleSubmit}>Criar</button>
</div>

    );
}
