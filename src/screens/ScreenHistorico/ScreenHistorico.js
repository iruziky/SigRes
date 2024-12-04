import Header from '../../components/Blocos/Header/Header'
import Historico from '../../components/Blocos/Historico/Historico'
import Footer from '../../components/Blocos/Footer/Footer'

export default function ScreenHistorico( {numeroMesa} ) {
    return (
        <>
            <Header numeroMesa={numeroMesa} tema={'laranja'} imageSrc={'/images/historicoGrande.svg'} tituloPagina={'Historico'}/>
            <Historico 
                props={[
                    {
                        horario: "21:35",
                        nomePrato: "Filé ao molho Gorgonzola",
                        quantidade: "5",
                        icone: "/images/garfo.svg"
                    },
                    {
                        horario: "20:15",
                        nomePrato: "Pizza Marguerita",
                        quantidade: "3",
                        icone: "/images/garfo.svg"
                    },
                    {
                        horario: "19:45",
                        nomePrato: "Espaguete à Carbonara",
                        quantidade: "2",
                        icone: "/images/garfo.svg"
                    },
                    {
                        horario: "21:00",
                        nomePrato: "Frango Grelhado com Legumes",
                        quantidade: "4",
                        icone: "/images/garfo.svg"
                    },
                    {
                        horario: "18:30",
                        nomePrato: "Lasanha Bolonhesa",
                        quantidade: "6",
                        icone: "/images/garfo.svg"
                    },
                    {
                        horario: "22:00",
                        nomePrato: "Risoto de Camarão",
                        quantidade: "2",
                        icone: "/images/garfo.svg"
                    }
                ]}/>
                
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