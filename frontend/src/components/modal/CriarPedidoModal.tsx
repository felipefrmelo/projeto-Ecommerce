import { Pedido } from "@/src/core";
import styles from './Modal.module.css';
import { useModal } from '@/src/data/hooks/useModalCriar';

interface CriarPedidoModalProps {
    onSubmit: (pedido: Pedido) => void;
    closeModal: () => void; 
}

export default function CriarPedidoModal({ onSubmit, closeModal }: CriarPedidoModalProps) {
    const { pedido, setPedido, handleSubmit, handleChange, successMessage } = useModal({ onSubmit });

    const handleCreateClick = async () => {
        await handleSubmit();
    };

    return (
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '15px',
                width: '60%', 
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
                margin: '0 auto'
            }}>
                <h2 style={{ width: '100%', textAlign: 'center' }}>Criar Pedido</h2>

                <input
                    className={styles.inputPadrao}
                    name="nomeCliente" 
                    value={pedido.nomeCliente} 
                    onChange={handleChange} 
                    placeholder="Nome do Cliente" 
                />

                <input  
                    className={styles.inputPadrao}
                    type="date" 
                    name="dataPedido" 
                    value={pedido.dataPedido} 
                    onChange={handleChange} 
                    placeholder="Data do Pedido" 
                />

                <input 
                    className={styles.inputPadrao}
                    name="nomeProduto" 
                    value={pedido.itensPedidos.nomeProduto} 
                    onChange={(e) => 
                        setPedido(prev => ({ 
                            ...prev, 
                            itensPedidos: { ...prev.itensPedidos, nomeProduto: e.target.value } 
                        }))
                    } 
                    placeholder="Nome do Produto" 
                />

                <input 
                    className={styles.inputPadrao}
                    type="number" 
                    name="qntde"
                    value={pedido.itensPedidos.qntde === 0 ? "" : pedido.itensPedidos.qntde} 
                    onChange={(e) => 
                        setPedido(prev => ({ 
                            ...prev, 
                            itensPedidos: { ...prev.itensPedidos, qntde: Number(e.target.value) } 
                        }))
                    } 
                    placeholder="Quantidade" 
                    min="1"
                />

                <input 
                    className={styles.inputPadrao}
                    type="number"  
                    name="valorUnitario" 
                    value={pedido.itensPedidos.valorUnitario === 0 ? "" : pedido.itensPedidos.valorUnitario} 
                    onChange={(e) => 
                        setPedido(prev => ({ 
                            ...prev, 
                            itensPedidos: { ...prev.itensPedidos, valorUnitario: Number(e.target.value) } 
                        }))
                    } 
                    placeholder="Valor Unitário" 
                    min="0"
                    step="0.01"
                />

                <input 
                    className={styles.inputPadrao}
                    type="number" 
                    name="valorSubtotal" 
                    value={pedido.valorSubtotal === 0 ? "" : pedido.valorSubtotal} 
                    readOnly 
                    placeholder="Subtotal"
                />

                <input 
                    className={styles.inputPadrao}
                    type="number" 
                    name="valorFrete" 
                    value={pedido.valorFrete === 0 ? "" : pedido.valorFrete} 
                    onChange={(e) => 
                        setPedido(prev => ({ ...prev, valorFrete: Number(e.target.value) }))
                    } 
                    placeholder="Frete" 
                />

                <input 
                    className={styles.inputPadrao}
                    type="number" 
                    name="valorTotal" 
                    value={pedido.valorTotal === 0 ? "" : pedido.valorTotal} 
                    readOnly 
                    placeholder="Total" 
                />
                                
                <div style={{ display: 'flex', gap: '10px'}}>
                    <button onClick={handleCreateClick}
                        style={{
                            backgroundColor: 'green',
                            color: 'white',
                            borderRadius: '5px',
                            padding: '10px 15px',
                            cursor: 'pointer',
                            maxWidth: '150px',
                            border: '1px solid green'

                        }}>
                        Criar
                    </button>

                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    
                    <button onClick={closeModal}
                        style={{
                            backgroundColor: 'gray',
                            color: 'white',
                            borderRadius: '5px',
                            padding: '10px 15px',
                            cursor: 'pointer',
                            maxWidth: '150px',
                            border: '1px solid gray'

                        }}>
                        Cancelar
                    </button>
                </div>
            </div>
    );
}
