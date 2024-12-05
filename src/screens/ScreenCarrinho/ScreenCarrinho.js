import Header from '../../components/Blocos/Header/Header'
import Footer from '../../components/Blocos/Footer/Footer'
import Produtos from '../../components/Blocos/Produtos/Produtos'
import BotaoConfirmar from '../../components/Elementos/botaoConfirmar/botaoConfirmar'
import { Link } from 'react-router-dom';

export default function ScreenCarrinho() {
    const produtosNoLocalStorage = Object.keys(localStorage).map((key) => {
        const produto = JSON.parse(localStorage.getItem(key));
        return produto;
    });

    const produtosComQuantidade = produtosNoLocalStorage.filter(produto => produto.quantidade > 0);

    return (
        <>
            <Header tema={'verde'} imageSrc={'/images/carrinhoGrande.svg'} tituloPagina={'Carrinho'} />
            <Produtos
                produtos={produtosComQuantidade} // Passa os produtos com quantidade maior que 0
            />
            <Link to='/mesas'>
                <BotaoConfirmar/>
            </Link>
            
            <Footer
                icons={[
                    { 
                        src: 'images/home.svg', 
                        alt: 'Início', 
                        className: 'botao',
                        name: 'Início',
                        link: '/mesas'
                    },
                    { 
                        src: 'images/chat.svg', 
                        alt: 'Chat', 
                        className: 'botao', 
                        name: 'Chat',
                        link: ''
                    },
                    { 
                        src: 'images/search.svg', 
                        alt: 'Buscar', 
                        className: 'botao', 
                        name: 'Buscar',
                        link: ''
                    },
                    { 
                        src: 'images/registration.svg', 
                        alt: 'Histórico', 
                        className: 'botao', 
                        name: 'Histórico',
                        link: '/historico'
                    },
                    { 
                        src: 'images/shoppingCart.svg', 
                        alt: 'Carrinho', 
                        className: 'botao', 
                        name: 'Carrinho',
                        link: '/carrinho'
                    },
                ]}/>
        </>
    );
}
