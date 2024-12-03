import { useNavigate } from 'react-router-dom';
import './Mesas.css';

export default function Mesas({ props }) {
    const navigate = useNavigate();

    const definirClasseDaMesa = (mesaOcupada) => {
        if (mesaOcupada) {
            return "mesa mesaSelecionada";
        }
        return "mesa"
    };

    return (
        <div className="mesas">
            
            {props.map((prop) => (
                
                <div
                className={definirClasseDaMesa(prop.mesaOcupada)}
                onClick={() => {
                    localStorage.setItem('numeroMesa', prop.numeroMesa);
                    navigate('/produtos');
                }}
                >
                    <p className="numeroSelecionado">{prop.numeroMesa}</p>
                </div>
                
            ))}  
        </div>
    );
}
