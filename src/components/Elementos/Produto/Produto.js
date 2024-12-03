import { useState, useEffect } from 'react';
import './Produto.css';

export default function Produto({ nomeProduto, preco, iconePath }) {
    // Inicializa o estado com os dados armazenados no localStorage (caso existam)
    const [produto, setProduto] = useState(() => {
        const savedProduct = localStorage.getItem(nomeProduto);
        return savedProduct ? JSON.parse(savedProduct) : { nome: nomeProduto, preco, iconePath, quantidade: 0 };
    });

    const aumentarQuantidade = () => {
        setProduto(prevProduto => {
            const newProduto = { ...prevProduto, quantidade: prevProduto.quantidade + 1 };
            // Armazenar o objeto completo no localStorage
            localStorage.setItem(nomeProduto, JSON.stringify(newProduto));
            return newProduto;
        });
    };

    const diminuirQuantidade = () => {
        setProduto(prevProduto => {
            const newProduto = { ...prevProduto, quantidade: prevProduto.quantidade > 0 ? prevProduto.quantidade - 1 : 0 };
            // Armazenar o objeto completo no localStorage
            localStorage.setItem(nomeProduto, JSON.stringify(newProduto));
            return newProduto;
        });
    };

    // Atualiza o estado caso o nome do produto mude
    useEffect(() => {
        const savedProduct = localStorage.getItem(nomeProduto);
        if (savedProduct) {
            setProduto(JSON.parse(savedProduct));
        }
    }, [nomeProduto]);

    return (
        <div className='Produto'>
            <div className='Informacoes'>
                <img src={produto.iconePath} alt="Descrição do PNG" />
                <div className='Textos'>
                    <h1>{produto.nome}</h1>
                    <p>Preço: <span>R${produto.preco}</span></p>
                </div>
            </div>
            <div className='Botoes'>
                <div className='Contador'>
                    <div className='Menos' onClick={diminuirQuantidade}><p>-</p></div>
                    <div className='Painel'><p>{produto.quantidade}</p></div>
                    <div className='Mais' onClick={aumentarQuantidade}><p>+</p></div>
                </div>
                <div className='Observacoes'>
                    <p>Observações</p>
                </div>
            </div>
        </div>
    );
}
