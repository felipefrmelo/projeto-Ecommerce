import { useModalDeletar } from "@/src/data/hooks/useModalDeletar";

interface DeletarPedidoModalProps {
    onSubmit: (id: number) => void;
    closeModal: () => void; 
}

export default function DeletarPedidoModal({ onSubmit, closeModal }: DeletarPedidoModalProps) {
    const { pedidoId, setPedidoId, handleDelete, successMessage, errorMessage } = useModalDeletar({ onSubmit });

    const handleDeleteClick = async () => {
        await handleDelete(); 
    };

    return (

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                width: '50%', 
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
                margin: '0 auto'
            }}>
                <h2 style={{ width: '100%', textAlign: 'center' }}>Deletar Pedido</h2>

                <input 
                    style={{
                        border: '1px solid',
                        borderRadius: '5px',
                        padding: '10px',
                        margin: '10px',
                    }}
                    placeholder="ID do Pedido" 
                    value={pedidoId || ''} 
                    onChange={(e) => setPedidoId(Number(e.target.value))} 
                />
                <div style={{ display: 'flex', gap: '10px'}}>
                    <button onClick={handleDeleteClick} 
                        style={{
                            backgroundColor: 'red',
                            color: 'white',
                            borderRadius: '5px',
                            padding: '5px 5px',
                            cursor: 'pointer',
                            width: '150px',
                            border: '1px solid red'

                        }}>
                        Deletar
                    </button>
                    
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    
                    <button onClick={closeModal}
                        style={{
                            backgroundColor: 'gray',
                            color: 'white',
                            borderRadius: '5px',
                            padding: '5px 5px',
                            cursor: 'pointer',
                            width: '150px',
                            border: '1px solid gray'
                        }}>
                        Cancelar
                    </button>
                </div>
            </div>
    );
}
