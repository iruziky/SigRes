import './ScreenCarrinho.css'
import Header from '../../components/Blocos/Header/Header'
import Footer from '../../components/Blocos/Footer/Footer'
import Produtos from '../../components/Blocos/Produtos/Produtos'
import { Link } from 'react-router-dom';

export default function ScreenCarrinho() {
    // Recupera todos os itens no localStorage que são os produtos
    const produtosNoLocalStorage = Object.keys(localStorage).map((key) => {
        const produto = JSON.parse(localStorage.getItem(key)); // Recupera o objeto do produto
        return produto;
    });

    // Filtra apenas os produtos com quantidade maior que 0
    const produtosComQuantidade = produtosNoLocalStorage.filter(produto => produto.quantidade > 0);

    return (
        <>
            <Header tema={'verde'} imageSrc={'/images/carrinhoGrande.svg'} tituloPagina={'Carrinho'} />
            <Produtos
                produtos={produtosComQuantidade} // Passa os produtos com quantidade maior que 0
            />
            <Link to='/mesas'>
                <div className='botaoConfirmar'>
                    <p>Confirmar</p>
                </div>
            </Link>
            
            <Footer
                icons={[
                    { 
                        src: 'images/mesaPequena.svg', 
                        alt: 'Mesas', 
                        className: 'botao',
                        name: 'Mesas',
                        link: '/mesas'
                    },
                    { 
                        src: 'images/chat-botton.svg', 
                        alt: 'Chat', 
                        className: 'botao', 
                        name: 'Chat',
                        link: ''
                    },
                    { 
                        src: 'images/buscar.svg', 
                        alt: 'Buscar', 
                        className: 'botaoMaior', 
                        name: 'Buscar',
                        link: '/produtos'
                    },
                    { 
                        src: 'images/historico.svg', 
                        alt: 'Histórico', 
                        className: 'botao', 
                        name: 'Histórico',
                        link: '/historico'
                    },
                    { 
                        src: 'images/carrinho.svg', 
                        alt: 'Carrinho', 
                        className: 'botao', 
                        name: 'Carrinho',
                        link: '/carrinho'
                    },
                ]}
            />
        </>
    );
}
