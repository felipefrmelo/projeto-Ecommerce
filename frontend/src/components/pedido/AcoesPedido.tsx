import CriarPedidoModal from "./Modal";
import { Pedido } from "@/src/core";
import { useAcoesPedido } from "@/src/data/hooks/useAcoesPedido";
interface AcoesPedidoProps {
  onCreate: (pedido: Pedido) => void;
  onDelete: (id: number) => void;
}

export default function AcoesPedido({ onCreate, onDelete }: AcoesPedidoProps) {
  const {
    isModalOpen,
    modalType,
    pedidoId,
    setPedidoId,
    openModal,
    closeModal
  } = useAcoesPedido();

  const handleCreate = (pedido: Pedido) => {
    onCreate(pedido);
    closeModal();
  };

  const handleDelete = () => {
    if (pedidoId) {
      onDelete(pedidoId);
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={() => openModal('create')}>Criar Pedido</button>
      <button onClick={() => openModal('delete')}>Deletar Pedido</button>

      {modalType === 'create' && (
        <CriarPedidoModal
          onSubmit={handleCreate}
        />
      )}

      {modalType === 'delete' && (
        <div>
          <h2>Deletar Pedido</h2>
          <input 
            placeholder="ID do Pedido" 
            value={pedidoId || ''} 
            onChange={(e) => setPedidoId(Number(e.target.value))} 
          />
          <button onClick={handleDelete}>Deletar</button>
        </div>
      )}
    </div>
  );
}
