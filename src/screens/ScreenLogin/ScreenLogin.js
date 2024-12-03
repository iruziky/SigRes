import './ScreenLogin.css'
import { Link } from 'react-router-dom';

export default function ScreenLogin() {
    return (
        <div className="ScreenLogin">
            <div className='Container'>
                
                <div className='topo'>
                    <div className='Quadradrinhoo'>
                        <img src='/images/garcom.svg' alt="Descrição do PNG" className='ImgGarcom'/>
                    </div>
                    <h1 className='NomeSistemaa'>SiG<br></br>Res</h1>
                </div>

                <div className='containerInputs'>
                    <div className='inputPersonalizado'>
                        <p className='textoInformativo'>Usuário</p>
                        <input type="text" placeholder="Digite o usuário" className='campoInput'/>
                    </div>

                    <div className='inputPersonalizado'>
                        <p className='textoInformativo'>Senha</p>
                        <input type="password" placeholder="Digite a senha" className='campoInput'/>
                    </div>
                    
                    <Link to='/mesas' className="IconLink">
                        <input type="button" value="Entrar" className='botaoEntrar'/>
                    </Link>

                </div>
                
            </div>
        </div>
    )
}