import './ScreenCarrinho.css'
import Header from '../../components/Blocos/Header/Header'
import Footer from '../../components/Blocos/Footer/Footer'
import Produtos from '../../components/Blocos/Produtos/Produtos'

import { Link } from 'react-router-dom';

export default function ScreenCarrinho() {
    return (
        <>
            <Header tema={'verde'} imageSrc={'/images/carrinhoGrande.svg'} tituloPagina={'Carrinho'}/>
            <Produtos
                produtos={[
                    { 
                        nome: 'Espaguete à Carbonara', 
                        preco: '39', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Frango Grelhado com Batatas', 
                        preco: '29', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Pizza Marguerita', 
                        preco: '39', 
                        iconePath: '/images/garfo.svg'
                    }
                ]}
            />
            <Link to='/mesas'><div className='botaoConfirmar'><p>Confirmar</p></div></Link>
            
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
                ]}/>
        </>
    )
}