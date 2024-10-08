import Cabecalho from "./Cabecalho";

export interface PaginaProps {
    children: any
}
export default function Pagina(props: any) {
    return(
        <div 
            style={{
                background: 'white',
                alignItems: 'center'
            }}
        >
            <div>
                <Cabecalho />
                <main
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: '40px',
                        paddingBottom: '40px',
                    }}
                >
                    {props.children}
                </main>
                
            </div>
        </div>
    )
}