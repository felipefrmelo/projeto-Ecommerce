import { useModalDeletar } from "@/src/data/hooks/useModalDeletar";

export default function DeletarPedidoModal({ onDelete }: { onDelete: (id: number) => void }) {
    const { pedidoId, setPedidoId, handleDelete, successMessage, errorMessage } = useModalDeletar({ onDelete });

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '15px',
                width: '50%', 
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
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
    
                <button onClick={handleDelete} 
                    style={{
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '5px 5px',
                        cursor: 'pointer',
                        width: '150px'
                        }}>
                    Deletar
                </button>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                
            </div>
        </div>
    );
}
