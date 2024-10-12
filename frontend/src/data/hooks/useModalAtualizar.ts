import { useState, useEffect } from "react";
import { Pedido } from "@/src/core";

export function useAtualizarPedido(pedidoInicial: Pedido) {
    const [pedido, setPedido] = useState<Pedido>(pedidoInicial);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        const subtotal = pedido.itensPedidos.qntde * pedido.itensPedidos.valorUnitario;
        const total = subtotal + pedido.valorFrete;
        setPedido((prev) => ({ ...prev, valorSubtotal: subtotal, valorTotal: total }));
    }, [pedido.itensPedidos.qntde, pedido.itensPedidos.valorUnitario, pedido.valorFrete]);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        if (name.startsWith("itensPedidos.")) {
            const fieldName = name.split(".")[1];
            setPedido((prev) => ({
                ...prev,
                itensPedidos: {
                    ...prev.itensPedidos,
                    [fieldName]: fieldName === "qntde" || fieldName === "valorUnitario" ? Number(value) : value
                }
            }));
        } else {
            setPedido((prev) => ({
                ...prev,
                [name]: name === "valorFrete" ? Number(value) : value
            }));
        }
    }

    return {
        pedido,
        setPedido,
        handleInputChange,
        successMessage,
        setSuccessMessage,
    };
}
