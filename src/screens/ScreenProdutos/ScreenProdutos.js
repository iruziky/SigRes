import Header from '../../components/Blocos/Header/Header'
import Produtos from '../../components/Blocos/Produtos/Produtos'
import Footer from '../../components/Blocos/Footer/Footer'
import SearchBox from '../../components/Elementos/SearchBox/SearchBox'

export default function ScreenProdutos() {
    return (
        <> 
            <Header tema={'laranja'} imageSrc={'/images/garcom.svg'} tituloPagina={'Produtos'}/>
            <SearchBox/>
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
                    },
                    { 
                        nome: 'Salmão com Molho de Maracujá', 
                        preco: '49,90', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Risoto de Cogumelos', 
                        preco: '42,00', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Lasanha de Carne', 
                        preco: '34,90', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Hambúrguer Artesanal', 
                        preco: '24,90', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Salada Caesar', 
                        preco: '19,90', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Peixe ao Molho de Limão', 
                        preco: '45,00', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Espaguete ao Alho e Óleo', 
                        preco: '22,50', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Taco Mexicano', 
                        preco: '32,00', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Tiramisu', 
                        preco: '18,00', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Cheesecake de Morango', 
                        preco: '22,90', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Brownie de Chocolate', 
                        preco: '15,00', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Crepe de Nutella', 
                        preco: '20,00', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Bife à Parmegiana', 
                        preco: '39,90', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Pizza de Calabresa', 
                        preco: '37,50', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Frango à Parmegiana', 
                        preco: '36,90', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Strogonoff de Carne', 
                        preco: '42,90', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Pão de Alho', 
                        preco: '12,00', 
                        iconePath: '/images/garfo.svg'
                    },
                    { 
                        nome: 'Macarrão à Bolonhesa', 
                        preco: '35,00', 
                        iconePath: '/images/garfo.svg'
                    }
                ]}
            />
            <Footer
                icons={[
                    { 
                        src: 'images/home.svg', 
                        alt: 'Mesas', 
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
    )
}
