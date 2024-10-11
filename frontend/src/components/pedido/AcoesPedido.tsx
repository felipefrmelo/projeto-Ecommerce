import CriarPedidoModal from "../modal/CriarPedidoModal";
import DeletarPedidoModal from "../modal/DeletarPedidoModal";
import { Pedido } from '@core/pedido';
import { useAcoesPedido } from "@/src/data/hooks/useAcoesPedido";
interface AcoesPedidoProps {
  onCreate: (pedido: Pedido) => void;
  onDelete: (id: number) => void;
}

export default function AcoesPedido({ onCreate, onDelete }: AcoesPedidoProps) {
  const {
    isModalOpen,
    modalType,
    openModal,
    closeModal
  } = useAcoesPedido();

  return (
    <div style={{ width: '100%' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '30px',
        width: '100%',
        paddingBottom: '20px'
      }}>
        <button style={{
          backgroundColor: 'green',
          color: 'white',
          borderRadius: '10px',
          padding: '8px 15px',
          fontWeight: '500'
        }} onClick={() => openModal('create')}>Criar Pedido</button>

        <button style={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '10px',
          padding: '8px 15px',
          fontWeight: '500'
        }} onClick={() => openModal('delete')}>Deletar Pedido</button>
      </div>

      {modalType === 'create' && (
        <CriarPedidoModal onSubmit={onCreate} />
      )}

      {modalType === 'delete' && (
        <DeletarPedidoModal onDelete={onDelete} />
      )}
    </div>
  );
}
