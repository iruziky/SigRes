import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mesas.css';

export default function Mesas({ quantidadeMesas }) {
    const navigate = useNavigate();
    
    // Carrega o estado das mesas selecionadas do localStorage
    const carregarMesasSelecionadas = () => {
        const mesasSalvas = localStorage.getItem('mesasSelecionadas');
        return mesasSalvas ? JSON.parse(mesasSalvas) : [];
    };

    // Estado para armazenar os índices das mesas selecionadas
    const [mesasSelecionadas, setMesasSelecionadas] = useState(carregarMesasSelecionadas);

    // Função para lidar com o clique na mesa
    const selecionarMesa = (index) => {
        let novasMesasSelecionadas;
        
        if (mesasSelecionadas.includes(index)) {
            // Se já foi selecionada, remove do array (deseleciona)
            novasMesasSelecionadas = mesasSelecionadas.filter((mesa) => mesa !== index);
        } else {
            // Se não foi selecionada, adiciona ao array (seleciona)
            novasMesasSelecionadas = [...mesasSelecionadas, index];
        }

        setMesasSelecionadas(novasMesasSelecionadas);

        // Salva as mesas selecionadas no localStorage
        localStorage.setItem('mesasSelecionadas', JSON.stringify(novasMesasSelecionadas));

        navigate('/produtos');
    };

    // Cria as mesas dinamicamente
    const mesas = Array.from({ length: quantidadeMesas }, (_, index) => (
        <div
            key={index}
            className={`Mesa ${mesasSelecionadas.includes(index) ? 'selecionada' : ''}`}
            onClick={() => selecionarMesa(index)} // Define o que acontece ao clicar
        >
            <p className={mesasSelecionadas.includes(index) ? 'numeroSelecionado' : ''}>
                {index + 1}
            </p>
        </div>
    ));

    return (
        <div className="Mesas">
            {mesas}
        </div>
    );
}
