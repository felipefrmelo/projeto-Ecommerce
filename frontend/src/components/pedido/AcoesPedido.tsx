import CriarPedidoModal from "../modal/CriarPedidoModal";
import DeletarPedidoModal from "../modal/DeletarPedidoModal";
import AtualizarPedidoModal from "../modal/AtualizarPedidoModal";
import { Pedido } from "@/src/core";
import { useAcoesPedido } from "@/src/data/hooks/useAcoesPedido";
import { useState, useCallback } from "react";

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
    }
  }, [pedidoId, obterPedidoPorId, openModal, setSelectedPedido]);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "30px",
          width: "100%",
          paddingBottom: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "10px",
            padding: "8px 15px",
            fontWeight: "500",
          }}
          onClick={() => openModal("create")}
        >
          Criar Pedido
        </button>

        <button
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "10px",
            padding: "8px 15px",
            fontWeight: "500",
          }}
          onClick={() => openModal("delete")}
        >
          Deletar Pedido
        </button>

        <input
          type="number"
          value={pedidoId}
          onChange={(e) => setPedidoId(e.target.value)}
          placeholder="ID do Pedido"
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
            padding: "8px 15px",
            fontWeight: "500",
          }}
          onClick={handleFindPedido}
        >
          Atualizar Pedido
        </button>
      </div>

      {modalType === "create" && <CriarPedidoModal onSubmit={onCreate} />}
      {modalType === "delete" && <DeletarPedidoModal onDelete={onDelete} />}
      {modalType === "update" && selectedPedido && (
        <AtualizarPedidoModal pedido={selectedPedido} onSubmit={onUpdate} closeModal={closeModal} />
      )}
    </div>
  );
}
