import React from 'react'
import Navbar from '../components/navbar'
import Banho1 from '../images/banho1.png'
import Banho2 from '../images/banho2.png'
import Banho3 from '../images/banho3.jpg'
import Banho4 from '../images/banho4.jpg'
import Banho5 from '../images/banho5.jpg'
import Banho6 from '../images/banho6.jpg'

const Pagina1 = () => {
    return (
        <div>
            <Navbar />
            <div class="flex">
                <div class="titulo">
                    <h1><u>Banhos e Tosas</u></h1>
                    <p>Transforme o momento de banho e tosa do seu peludo em um spa exclusivo com a <strong>DoCão</strong>. Cuidado, carinho e estilo, porque seu pet merece o melhor!</p>
                </div>
            </div>
            <div class="caixa">
                <div class='fotos'>
                    <img src={Banho1} />
                    <img src={Banho2} class="transparent1" />
                </div>
                <div class='fotos'>
                    <img src={Banho3} />
                    <img src={Banho4} class="transparent2" />
                </div>
                <div class='fotos'>
                    <img src={Banho5} />
                    <img src={Banho6} class="transparent3" />
                </div>
            </div>
            <div class="flex">
                <div class="titulo">
                    <h1><u>Seu cachorro tá parecendo um <strong>Cão</strong>😈 ?, aqui ele vai sair um cachorrão!🙈</u></h1>
                </div>
            </div>
        </div>
    )
}
export default Pagina1