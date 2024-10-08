import { useState } from "react";
import { Pedido } from "@/src/core";

export function useAcoesPedido() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'create' | 'delete' | null>(null);
  const [pedidoId, setPedidoId] = useState<number | null>(null);
  const [selectedPedido, setSelectedPedido] = useState<Pedido | null>(null); 

  const openModal = (type: 'create' | 'delete', pedido?: Pedido) => {
    setModalType(type);
    if (pedido) {
      setSelectedPedido(pedido);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
    setSelectedPedido(null);
    setPedidoId(null);
  };

  return {
    isModalOpen,
    modalType,
    pedidoId,
    selectedPedido,
    setPedidoId,
    openModal,
    closeModal
  };
}
