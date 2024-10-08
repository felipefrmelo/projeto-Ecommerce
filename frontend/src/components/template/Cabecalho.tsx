import Logo from '../shared/Logo'
import IconeCarrinho from '../shared/IconeCarrinho'
import Link from 'next/link'

export default function Cabecalho() {
    return (
        <div
            style={{
                background: 'black',
                height: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div 
                style={{
                    color: 'white',
                }}>
                Listagem de pedidos
            </div>
        </div>
    )
}
