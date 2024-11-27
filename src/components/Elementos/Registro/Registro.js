import './Registro.css';

export default function Registro() {
    return (
        <div className='Registro'>
            <div className='horario'><p>21:35</p></div>
            
            <div className='informacoes'>
                <img src="/images/garfo.svg" alt="Descrição do PNG"/>
                <p className='produto'>Filé ao molho Gonrgonzola</p>
                <div className='quantidade'>
                    <p className='numero'>5</p>
                    <p className='unidades'>Unidades</p>
                </div>
            </div>
           
        </div>
    );
}
