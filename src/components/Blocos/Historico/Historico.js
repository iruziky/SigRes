import './Historico.css';

export default function Historico( {props} ) {
    return (
        <div className='Historico'>
            {props.map((prop) => (
                <div className='Registro'>
                    <div className='container'>
                        <div className='horario'><p>{prop.horario}</p></div>
                        
                        <div className='informacoes'>
                            <img src={prop.icone} alt="Descrição do PNG"/>
                            <p className='produto'>{prop.nomePrato}</p>
                            <div className='quantidade'>
                                <p className='numero'>{prop.quantidade}</p>
                                <p className='unidades'>Unidades</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}