import CriarPedidoModal from "../modal/CriarPedidoModal";
import DeletarPedidoModal from "../modal/DeletarPedidoModal";
import AtualizarPedidoModal from "../modal/AtualizarPedidoModal";
import { Pedido } from "@/src/core";
import { useAcoesPedido } from "@/src/data/hooks/useAcoesPedido";
import { useState, useCallback } from "react";
import styles from './AcoesPedido.module.css';

interface AcoesPedidoProps {
  onCreate: (pedido: Pedido) => void;
  onDelete: (id: number) => void;
  onUpdate: (pedido: Pedido) => void;
  obterPedidoPorId: (id: number) => Promise<Pedido | null>; 
}

export default function AcoesPedido({ onCreate, onDelete, onUpdate, obterPedidoPorId }: AcoesPedidoProps) {
  const {
    isModalOpen,
    modalType,
    selectedPedido,
    openModal,
    closeModal,
    setSelectedPedido,
  } = useAcoesPedido();

  const [pedidoId, setPedidoId] = useState<number | string>("");

  const handleFindPedido = useCallback(async () => {
    if (pedidoId) {
      const pedido = await obterPedidoPorId(Number(pedidoId));
      if (pedido) {
        setSelectedPedido(pedido);
        openModal("update");
      } else {
        alert("Pedido não encontrado.");
      }
    } else {
      alert('Insira o ID');
    }
  }, [pedidoId, obterPedidoPorId, openModal, setSelectedPedido]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={styles.createButton} onClick={() => openModal("create")}>
          Criar Pedido
        </button>

        <button className={styles.deleteButton} onClick={() => openModal("delete")}>
          Deletar Pedido
        </button>

        <button className={styles.updateButton} onClick={handleFindPedido}>
          Atualizar Pedido
        </button>

        <input
          type="number"
          value={pedidoId}
          onChange={(e) => setPedidoId(e.target.value)}
          placeholder="ID pedido atualizado"
          className={styles.inputId}
        />
      </div>

      {modalType === "create" && <CriarPedidoModal onSubmit={onCreate} closeModal={closeModal} />}
      {modalType === "delete" && <DeletarPedidoModal onSubmit={onDelete} closeModal={closeModal} />}
      {modalType === "update" && selectedPedido && (
        <AtualizarPedidoModal pedido={selectedPedido} onSubmit={onUpdate} closeModal={closeModal} />
      )}
    </div>
  );
}
