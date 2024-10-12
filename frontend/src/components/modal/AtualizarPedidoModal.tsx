import React, { useState } from "react";
import { Pedido } from "@/src/core";
import { useAtualizarPedido } from "@/src/data/hooks/useModalAtualizar";

interface AtualizarPedidoModalProps {
  pedido: Pedido;
  onSubmit: (pedido: Pedido) => void;
  closeModal: () => void;
}

const AtualizarPedidoModal: React.FC<AtualizarPedidoModalProps> = ({ pedido, onSubmit, closeModal }) => {
  const { pedido: pedidoAtualizado, handleInputChange } = useAtualizarPedido(pedido);
  
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSave = () => {
    onSubmit(pedidoAtualizado);
    setSuccessMessage("Pedido atualizado com sucesso!"); 
  };

  return (
    <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '15px',
              width: '80%', 
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9',
              margin: '0 auto'
    }}>
      <h2 style={{ width: '100%', textAlign: 'center' }}>Atualizar Pedido</h2>
      <input
        type="text"
        name="id"
        value={pedidoAtualizado.id}
        readOnly 
      />
      <input
        type="text"
        name="nomeCliente"
        value={pedidoAtualizado.nomeCliente}
        onChange={handleInputChange}
        placeholder="Nome do Cliente"
      />
      <select
        name="statusPedido"
        value={pedidoAtualizado.statusPedido}
        onChange={handleInputChange}
      >
        <option value="pendente">Pendente</option>
        <option value="enviado">Enviado</option>
        <option value="entregue">Entregue</option>
      </select>
      <input
        type="date"
        name="dataPedido"
        value={pedidoAtualizado.dataPedido}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="valorSubtotal"
        value={pedidoAtualizado.valorSubtotal}
        onChange={handleInputChange}
        placeholder="Valor Subtotal"
      />
      <input
        type="number"
        name="valorFrete"
        value={pedidoAtualizado.valorFrete}
        onChange={handleInputChange}
        placeholder="Valor Frete"
      />
      <input
        type="number"
        name="valorTotal"
        value={pedidoAtualizado.valorTotal}
        onChange={handleInputChange}
        placeholder="Valor Total"
      />
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginTop: '15px',
        width: '100%' 
        }}>
        <button onClick={handleSave}>Salvar</button>
        <button onClick={closeModal}>Cancelar</button>
      </div>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default AtualizarPedidoModal;
