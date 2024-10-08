import { Pedido } from "@/src/core";
import { useCallback, useEffect, useState } from "react";

const urlBase = 'http://localhost:4000'

export default function usePedidos() {
    const [itensPedidos, setPedidos] = useState<Pedido[]>([]);

    async function obterPedidos(): Promise<Pedido[]> {
        const resp = await fetch(`${urlBase}/pedidos`);
        const itensPedidos = await resp.json();
        return itensPedidos ?? [];
    }

    const obterPedidoPorId = useCallback(async function (id: number): Promise<Pedido | null> {
        const resp = await fetch(`${urlBase}/pedidos/${id}`);
        if (!resp.ok) {
            return null; 
        }
        const pedido = await resp.json();
        return pedido;
    }, []);

    async function criarPedido(novoPedido: Pedido): Promise<void> {
        const resp = await fetch(`${urlBase}/pedidos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoPedido),
        });

        
        const pedidoCriado = await resp.json();
        setPedidos((prev) => [...prev, pedidoCriado]);
    }



    async function deletarPedido(id: number): Promise<void> {
        const resp = await fetch(`${urlBase}/pedidos/${id}`, {
            method: 'DELETE',
        });

        const pedidosAtualizados = await obterPedidos();
        setPedidos(pedidosAtualizados);
    }

    useEffect(() => {
        obterPedidos().then(setPedidos);
    }, []);

    return {
        itensPedidos,
        obterPedidoPorId,
        criarPedido,
        deletarPedido,
    };
}
