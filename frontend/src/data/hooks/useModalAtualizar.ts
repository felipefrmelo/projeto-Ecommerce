import { useState } from "react";
import { Pedido } from "@/src/core";

export function useAtualizarPedido(pedidoInicial: Pedido) {
  const [pedido, setPedido] = useState<Pedido>(pedidoInicial);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setPedido({ ...pedido, [name]: value });
  }

  function handleSubmit(onSubmit: (pedido: Pedido) => void) {
    onSubmit(pedido);
  }

  return {
    pedido,
    handleInputChange,
    handleSubmit,
  };
}
