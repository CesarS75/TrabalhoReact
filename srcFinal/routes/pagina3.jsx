import React from 'react'
import Navbar from '../components/navbar'
import Adoção from '../images/adocao.png'

const Pagina3 = () => {
    return (
        <div>
            <Navbar />
            <div className="titulo">
                <u><h1>Aba de adoção</h1></u>
            </div>
            <div class="bodyAdocao">
                <div class="flexAdocao">
                    <img src={Adoção} alt='ta carregando' />
                    <p>
                        <ul className="adocao">
                            <li>
                            <h3> - Benefícios da Adoção: </h3>
                                <li>Proporciona lares amorosos.</li>
                                <li>Reduz o abandono.</li>
                                <li>Melhora a qualidade de vida dos animais.</li>
                            </li>
                            <li>
                                <h3> - Conscientização e Responsabilidade:</h3>
                                <li>Promove conscientização sobre o abandono.</li>
                                <li>Incentiva responsabilidade na posse de pets.</li>
                                <li>Trás benefícios emocionais, como a redução do estresse.</li>
                            </li>
                            <li>
                                <h3> - Impacto Positivo na Sociedade:</h3>
                                <li>Desencoraja práticas prejudiciais, como o comércio ilegal de animais.</li>
                                <li>Beneficia a comunidade ao evitar problemas comportamentais.</li>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Pagina3