import React from 'react'
import Navbar from '../components/navbar'
import FotoDog from '../components/fotoDog'
import Marca1 from '../images/marca1.png'
import Marca2 from '../images/marca2.png'
import Marca3 from '../images/marca3.png'
import Marca4 from '../images/marca4.png'

const Pagina2 = () => {
    return (
        <div>
            <Navbar />
            <div className="titulo">
                <u><h1>Modelos de Cães</h1></u>
            </div>
            <div className="caixa2">
                <FotoDog 
                raca="Golden Retriever"
                foto={Marca1}

                text="Um dos cachorros mais dóceis e companheiros que você vai conhecer, o Golden Retriever é super apegado aos tutores e gosta muito de agradar as pessoas 
                que ama. Cheios de energia, esses animais amam brincar, correr e nadar, e se dão muito bem com estranhos, crianças, outros cachorros e fazem amizade com todo mundo."/>
                <FotoDog 
                raca="Salsichinha"
                foto={Marca2}

                text="Os salsichas são cachorros enérgicos e adoram gastar sua energia procurado novos alvos para caçar ou se divertir com o seu tutor.
                Portanto, para que ele não acabe tendo sobrepeso por ficar muito tempo parado, é importante realizar atividades físicas com o pet."/>
                <FotoDog 
                raca="Yorkshire"
                foto={Marca3}

                text="O Yorkshire pode ser reconhecido de longe devido ao padrão de características: porte pequeno,
                pelagem longa e reta, olhos escuros brilhantes, orelhas eretas, pequenas e pontudas, e muito enérgico. Ao estar diante dessa raça, o encantamento é instantâneo!"/>
                <FotoDog 
                raca="Doberman"
                foto={Marca4}

                text="Imponente, ele tem uma aparência elegante e costuma ser um cachorro esbelto e musculoso. 
                Curiosamente, o doberman é resultado de uma grande mistura de raças como o pastor alemão, rottweiler, pinscher e alguns terriers.
                funfact ( era cão de caça na alemanha no século XIX!!!)"/>
            </div>
        </div>
    )
}
export default Pagina2