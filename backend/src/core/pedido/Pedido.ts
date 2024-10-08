import itensPedido from "./ItensPedido"



export default interface Pedido {
    id: number
    nomeCliente: string
    statusPedido: 'pendente' | 'enviado' | 'entregue'
    dataPedido: string
    itensPedidos: itensPedido    
    valorSubtotal: number
    valorFrete: number
    valorTotal: number
}