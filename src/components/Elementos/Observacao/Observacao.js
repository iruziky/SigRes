import './Observacao.css';

import { useEffect } from 'react';
import Produto from '../../Elementos/Produto/Produto'
import BotaoConfirmar from '../../Elementos/botaoConfirmar/botaoConfirmar'
import CampoInput  from '../CampoInput/CampoInput';

export default function Observacao({ onClose }) {
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className='Containere'>
            <div className='Observacao' onClick={onClose}/>
            <div className='quadradoCentral'>
                <Produto 
                    key="1"
                    nomeProduto= "Frango Grelhado com Batatas"
                    preco= "32"
                    iconePath= '/images/garfo.svg'
                    estiloPersonalizado={{
                        background: 'none',
                        border: 0,
                        justifyContent: 'center',
                        columnGap: 'min(20px, 5vw)',
                        marginTop: 'min(10px, 2.5vw)',
                        width: "min(320px, 77vw)"}}
                    estiloOcultar={{display: 'none'}}
                    estiloBotoes={{padding: 0}}
                />
                <CampoInput
                props={{
                    type: "text",
                    placeholder: "Digite uma observação"
                }}
                style={{paddingLeft: '', width: "min(320px, 77vw)", height: "min(70px, 77vw)"}}
                />
                <BotaoConfirmar
                    style={{
                        position: 'unset',
                        transform: 'unset',
                        width: "min(320px, 77vw)"
                    }}
                />
            </div>
        </div>
    );
}
