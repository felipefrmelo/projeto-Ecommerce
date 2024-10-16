import { Pedido } from "@/src/core";
import { useCallback, useEffect, useState } from "react";

const urlBase = 'http://localhost:4000'

export default function usePedidos() {
    const [itensPedidos, setPedidos] = useState<Pedido[]>([]);

//O código não trata erros de fetch.
//Se houver um problema (por exemplo, a API estiver offline), ele resultará em um erro não tratado.
//É importante envolver as requisições com try...catch ou criar um tratamento de erro global para a aplicação.
//O mesmo comentário se aplica para as demais func criarPedido, deletarPedido, atualizarPedido...
    async function obterPedidos(): Promise<Pedido[]> {
        const resp = await fetch(`${urlBase}/pedidos`);
        const itensPedidos = await resp.json();
        return itensPedidos ?? [];
    }

    const obterPedidoPorId = useCallback(async function (id: number): Promise<Pedido> {
        // Prefira exceções a retornar codigos de erro como null isso separa a lógica de erro da lógica principal
        // e evita verificações manuais em cada etapa.
        try {
          const resp = await fetch(`${urlBase}/pedidos/${id}`);
          if (!resp.ok) {
              throw new Error("Erro ao obter pedido") // ou error retornado pela API;
          }
          const pedido = await resp.json();
          return pedido;
        } catch (error) {
          throw new Error("Erro ao obter pedido");
        }
        // outra opção seria deixar para o componente que chama essa função tratar o erro,
        // mas aqui continua lançando uma exceção em vez de retornar null
        //  const resp = await fetch(`${urlBase}/pedidos/${id}`);
        //  if (!resp.ok) {
        //      throw new Error("Erro ao obter pedido") // ou error retornado pela API;
        //  }
        //  const pedido = await resp.json();
        //  return pedido;
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

    async function atualizarPedido(pedidoAtualizado: Pedido, id: number): Promise<void> {
        const resp = await fetch(`${urlBase}/pedidos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pedidoAtualizado),  
        });
    
        if (!resp.ok) {
            console.error('Erro ao atualizar o pedido');
            return;
        }
    
        const pedidosAtualizados = await obterPedidos();
        setPedidos(pedidosAtualizados);
    }

    useEffect(() => {
        obterPedidos().then(setPedidos);
    }, []);

    return {
        atualizarPedido,
        itensPedidos,
        obterPedidoPorId,
        criarPedido,
        deletarPedido,
        
    };
}
