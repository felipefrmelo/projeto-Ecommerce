import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Pedido, itensPedidos } from 'src/core';


  //Não há validação dos dados recebidos no corpo da requisição, o que pode levar a erros ou dados inválidos sendo armazenados.
@Controller('pedidos')
export class PedidoController {
    @Get()
    async obterPedidos(): Promise<Pedido[]> {
  //O controlador depende diretamente do array itensPedidos, o que mistura a lógica de negócios com o controle de requisições.
  //Criar um serviço (PedidoService) para gerenciar a lógica de manipulação dos pedidos, separando responsabilidades e facilitando a manutenção e testes.
        return itensPedidos.map((pedido) => ({
            ...pedido,
        }));
    } 

    @Get(':id')
    async obterPedidosPorId(@Param('id') id: string): Promise<Pedido | null> {
        const pedido = itensPedidos.find((pedido) => pedido.id === +id);

  //Quando um pedido não é encontrado, o controlador retorna null, o que não é bom devido a falta de padronização.
  //Utilizar exceções como NotFoundException para fornecer respostas HTTP adequadas
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
