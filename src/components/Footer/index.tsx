import logo from '../../assets/logo-completo.png'
import redessociais from '../../assets/redes.png'
import StyleFooter from "./style"

const Footer = () => {
    return (
        <StyleFooter>
            <div>
                <div className='footerLogo'>
                    <img src={logo} alt="logo germinare" />
                    <hr />
                    <p>
                        Formamos tocadores de negócios
                    </p>
                </div>

                <div className='footerTag'>
                    <img src={redessociais} alt="logo germinare" />
                    <p>
                        Escola Germinare – Escola de Negócios © 2022
                    </p>
                </div>
            </div>

            <div className='footerLinks'>
                <h1>sobre nós</h1>
                <p>O instituto</p>
                <p>O Germinare</p>
                <p>Escola da família</p>
                <p>Grade curricular</p>
                <p>Notícias</p>
            </div>

            <div className='footerLinks'>
                <h1>admissão</h1>
                <p>Missão</p>
                <p>Valores</p>
                <p>As etapas</p>
            </div>

            <div className='footerContact'>
                <div className='footerTalk'>
                    <h1>Fale com a gente</h1>
                    <p>+55 11 3623-6000</p>
                </div>
                <div className='footerTalk'>
                    <h1>Localização</h1>
                    <p>R. Irineu José Bordon, 335</p>
                    <p>05120-060 - Vila Jaguara - São Paulo</p>
                </div>
            </div>
        </StyleFooter>
    )
}

export default Footer
