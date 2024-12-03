import './Header.css';
import { useLocation } from 'react-router-dom';

export default function Header({ imageSrc, tema, tituloPagina}) {
    const location = useLocation();
    const pathname = location.pathname

    const temaClass = tema === "verde" ? "tema-verde" : "tema-laranja";
    const numeroMesa = localStorage.getItem('numeroMesa');

    let imgClass = "";
    if (tituloPagina === "Mesas") {
        imgClass = "ImgMesa";
    } else if (tituloPagina === "Produtos") {
        imgClass = "ImgGarcom";
    } else if (tituloPagina === "Historico") {
        imgClass = "ImgHistorico";
    } else if (tituloPagina === "Carrinho") {
        imgClass = "ImgCarrinho";
    }

    return (
        <div className={`Header ${temaClass}`}>
            <div className='Topo'>
                <h1 className='NomeSistema'>SiG<br></br>Res</h1>
                {pathname !== "/mesas" && numeroMesa && <h1 className='numeroMesa'>Mesa: {numeroMesa}</h1>}
            </div>

            <div className='Quadradrinho'>
                <img src={imageSrc} alt="Descrição do PNG" className={imgClass}/>
            </div>
            <h1 className='TituloTela'>{tituloPagina}</h1>
        </div>
    )
}