import './Header.css';

export default function Header({ imageSrc, tema, tituloPagina}) {
    const temaClass = tema === "verde" ? "tema-verde" : "tema-laranja";

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
            </div>

            <div className='Quadradrinho'>
                <img src={imageSrc} alt="Descrição do PNG" className={imgClass}/>
            </div>
            <h1 className='TituloTela'>{tituloPagina}</h1>
        </div>
    )
}