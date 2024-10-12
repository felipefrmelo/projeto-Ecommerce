'use client'
import { Pedido } from "@/src/core";


export interface PedidoItemProps{
    pedido: Pedido
}

export default function pedidoItem(props: PedidoItemProps){
    const { pedido } = props
    return ( 
        <div style={{
            backgroundColor: 'black',
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '12px',
            padding: '15px 15px',
            }}>
            <div style={{
                width: '100%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    color: 'white',
                    marginBottom: '10px',
                    height: '40px'
                }}>
                    <span>Número do Pedido: {pedido.id}</span>
                    <span>Pedido feito em: {pedido.dataPedido}</span>
                </div>
            </div>

            <div style={{
                backgroundColor: 'white',
                color: 'black',
                width: '100%',
                borderRadius: '12px',
                padding: '10px 10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'

                }}>
                <div style={{
                        borderBottom: '1px solid lightgrey',
                        paddingBottom: '8px',                        
                    }}>
                    <span>
                        Cliente: <strong>{pedido.nomeCliente}</strong>
                    </span>
                </div>
                <div>
                    <span style={{
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadius: '20px',
                        padding: '4px 8px',
                        fontWeight: '600'
                    }}>
                        Pedido {pedido.statusPedido}
                    </span>
                </div>
                <div 
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                    <div 
                        style={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                        <span style={{
                            color: 'black'
                        }}>
                            {pedido.itensPedidos.nomeProduto}
                        </span>
                        <span style={{
                                color: 'black'
                            }}>
                            Quantidade: <strong>{pedido.itensPedidos.qntde}</strong>
                        </span>
                    </div>
                    <div>
                        <span style={{
                            color: 'black'
                        }}>
                            R${pedido.itensPedidos.valorUnitario}
                        </span>
                    </div>
                </div>
                    <h2 style={{
                        fontWeight: 'bold',
                        borderBottom: '1px solid lightgrey',
                        paddingBottom: '8px'
                    }}>
                        Pagamento</h2>
                <div style={{
                    paddingBottom: '15px'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        }}>
                        <span>Subtotal</span>
                        <span style={{
                            color: 'black'
                        }}>
                            R${pedido.valorSubtotal}
                        </span>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingBottom: '15px'
                        }}>
                        <span>Frete</span>
                        <span>
                            R${pedido.valorFrete}
                        </span>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderTop: '1px solid lightgrey',
                        paddingTop: '15px'
                        }}>
                        <span>Total do pedido</span>
                        <span>
                            R${pedido.valorTotal}
                        </span>
                    </div>

                </div>
                
            </div>
        </div>
    )
}
                        

