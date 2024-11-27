import './Produtos.css';

import Produto from '../../Elementos/Produto/Produto'

export default function Produtos({ produtos }) {
    return (
        <div className='Produtos'>
            {produtos.map((produto, index) => (
                <Produto 
                    key={index} 
                    nomeProduto={produto.nome} 
                    preco={produto.preco} 
                    iconePath={produto.iconePath} 
                />
            ))}
        </div>
    )
}
