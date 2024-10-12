import React from "react";
import { Pedido } from "@/src/core";
import { useAtualizarPedido } from "@/src/data/hooks/useModalAtualizar";
import styles from './Modal.module.css';

interface AtualizarPedidoModalProps {
  pedido: Pedido;
  onSubmit: (pedido: Pedido) => void;
  closeModal: () => void;
}

const AtualizarPedidoModal: React.FC<AtualizarPedidoModalProps> = ({ pedido, onSubmit, closeModal }) => {
  const { pedido: pedidoAtualizado, handleInputChange, successMessage, setSuccessMessage } = useAtualizarPedido(pedido);

  const handleSave = () => {
    if (!pedidoAtualizado.nomeCliente ||
        pedidoAtualizado.itensPedidos.qntde <= 0 ||
        pedidoAtualizado.itensPedidos.valorUnitario <=0 ||
        !pedidoAtualizado.itensPedidos.nomeProduto) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }
    onSubmit(pedidoAtualizado);
    setSuccessMessage("Pedido atualizado com sucesso!");
  };

  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '15px',
        width: '70%', 
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        margin: '0 auto'
    }}>
      <h2 style={{ width: '100%', textAlign: 'center' }}>Atualizar Pedido</h2>
      <input
        type="text"
        className={styles.inputPadrao}
        name="nomeCliente"
        value={pedidoAtualizado.nomeCliente}
        onChange={handleInputChange}
        placeholder="Nome do Cliente"
      />
      <input
        type="string"
        className={styles.inputPadrao}
        name="nomeProduto"
        value={pedidoAtualizado.itensPedidos.nomeProduto}
        onChange={handleInputChange}
        placeholder="Nome do Produto"
      />
      <input
        type="number"
        className={styles.inputPadrao}
        name="itensPedidos.qntde"
        value={pedidoAtualizado.itensPedidos.qntde || ""}
        onChange={handleInputChange}
        placeholder="Quantidade"
      />
      <input
        type="number"
        className={styles.inputPadrao}
        name="itensPedidos.valorUnitario"
        value={pedidoAtualizado.itensPedidos.valorUnitario || ""}
        onChange={handleInputChange}
        placeholder="Valor Unitário"
      />
      <input
        type="number"
        className={styles.inputPadrao}
        name="valorSubtotal"
        value={pedidoAtualizado.valorSubtotal || ""}
        readOnly
        placeholder="Subtotal"
      />
      <input
        type="number"
        className={styles.inputPadrao}
        name="valorFrete"
        value={pedidoAtualizado.valorFrete || ""}
        onChange={handleInputChange}
        placeholder="Frete"
      />
      <input
        type="number"
        className={styles.inputPadrao}
        name="valorTotal"
        value={pedidoAtualizado.valorTotal || ""}
        readOnly
        placeholder="Total"
      />
      <button style={{
                backgroundColor: 'green',
                color: 'white',
                borderRadius: '5px',
                padding: '5px 5px',
                cursor: 'pointer',
                maxWidth: '150px',
                flex: '1',
                border: '1px solid green'

            }}
      onClick={handleSave}>Salvar</button>
      
      <button style={{
          backgroundColor: 'gray',
          color: 'white',
          borderRadius: '5px',
          padding: '10px 15px',
          cursor: 'pointer',
          maxWidth: '150px',
          border: '1px solid grey'
      }}
      onClick={closeModal}>Cancelar</button>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default AtualizarPedidoModal;
