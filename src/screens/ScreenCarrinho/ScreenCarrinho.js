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
