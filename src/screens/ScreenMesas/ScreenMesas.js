import Header from '../../components/Blocos/Header/Header'
import Mesas from '../../components/Blocos/Mesas/Mesas'
import Footer from '../../components/Blocos/Footer/Footer'

export default function ScreenMesa() {
    return (
        <>
            <Header tema={'laranja'} imageSrc={'/images/mesa.svg'} tituloPagina={'Mesas'}/>
            <Mesas
                props={[
                    {
                        mesaOcupada: true, 
                        numeroMesa: "1"
                    },
                    {
                        mesaOcupada: false, 
                        numeroMesa: "2"
                    },
                    {
                        mesaOcupada: false, 
                        numeroMesa: "3"
                    },
                ]}/>
            <Footer
                icons={[
                    { 
                        src: 'images/voltar-botton.svg', 
                        alt: 'Voltar', 
                        className: 'botao',
                        name: 'Voltar',
                        link: '/'
                    },
                    { 
                        src: 'images/chat-botton.svg', 
                        alt: 'Chat', 
                        className: 'botao', 
                        name: 'Chat'
                    }
                ]}/>
        </>
    )
}