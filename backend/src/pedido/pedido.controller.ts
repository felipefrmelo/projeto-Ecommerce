import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Pedido, itensPedidos } from 'src/core';

@Controller('pedidos')
export class PedidoController {
    @Get()
    async obterPedidos(): Promise<Pedido[]> {
        return itensPedidos.map((pedido) => ({
            ...pedido,
        }));
    } 

    @Get(':id')
    async obterPedidosPorId(@Param('id') id: string): Promise<Pedido | null> {
        const pedido = itensPedidos.find((pedido) => pedido.id === +id);
        return pedido ?? null;
    }

    @Post()
    async criarPedido(@Body() pedido: Pedido): Promise<Pedido> {
        const novoPedido = {
            ...pedido,
            id: Math.floor(Math.random() * 1000000),
        };
        itensPedidos.push(novoPedido);
        return novoPedido; 
    }
    @Delete(':id')
    async removerPedido(@Param('id') id: string): Promise<void> {
        const index = itensPedidos.findIndex((pedido) => pedido.id === +id);
        if (index !== -1) {
            itensPedidos.splice(index, 1);
        }
    }

    @Put(':id')
    async atualizarPedido(@Param('id') id: string, @Body() pedidoAtualizado: Pedido): Promise<void> {
        const index = itensPedidos.findIndex((pedido) => pedido.id === +id);
        if (index !== -1) {
            itensPedidos[index] = { ...pedidoAtualizado, id: +id };
        }
    }

}
