import { useState } from 'react';
import './Produto.css';

export default function Produto({ nomeProduto, preco, iconePath}) {
    // Definindo o estado para a quantidade
    const [quantidade, setQuantidade] = useState(0);

    // Função para aumentar a quantidade
    const aumentarQuantidade = () => {
        setQuantidade(prevQuantidade => prevQuantidade + 1);
    };

    // Função para diminuir a quantidade
    const diminuirQuantidade = () => {
        setQuantidade(prevQuantidade => (prevQuantidade > 0 ? prevQuantidade - 1 : 0)); // Impede que a quantidade seja negativa
    };

    return (
        <div className='Produto'>
            <div className='Informacoes'>
                <img src={iconePath} alt="Descrição do PNG" />
                <div className='Textos'>
                    <h1>{nomeProduto}</h1>
                    <p>Preço: <span>R${preco}</span></p>
                </div>
            </div>
            <div className='Botoes'>
                <div className='Contador'>
                    <div className='Menos' onClick={diminuirQuantidade}><p>-</p></div>
                    <div className='Painel'><p>{quantidade}</p></div>
                    <div className='Mais' onClick={aumentarQuantidade}><p>+</p></div>
                </div>
                <div className='Observacoes'>
                    <p>Observações</p>
                </div>
            </div>
        </div>
    );
}
