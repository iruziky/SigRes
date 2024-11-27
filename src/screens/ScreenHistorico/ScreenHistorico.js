import Header from '../../components/Blocos/Header/Header'
import Historico from '../../components/Blocos/Historico/Historico'
import Footer from '../../components/Blocos/Footer/Footer'

export default function ScreenHistorico() {
    return (
        <>
            <Header tema={'laranja'} imageSrc={'/images/historicoGrande.svg'} tituloPagina={'Historico'}/>
            <Historico/>
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