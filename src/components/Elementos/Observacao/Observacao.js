import { useEffect } from 'react';
import './Observacao.css';

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
            <div className='quadradoCentral'></div>
        </div>
    );
}
