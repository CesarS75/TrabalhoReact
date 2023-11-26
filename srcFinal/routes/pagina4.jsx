import React from 'react'
import Navbar from '../components/navbar'

const Pagina4 = () => {
    return (
        <div>
            <Navbar />
            <div className="titulo">
                <u><h1>Bônus de Convite</h1></u>
            </div>
            <ul className='ul2'>
                <li>
                <u>O bônus de afiliado</u> é
                uma característica especial do nosso PetShop, ao qual você, cliente, tem acesso a recompensas totalmente gratuitas.<br></br>
                A <strong>DoCão</strong> proporciona um total de 4 prêmios, onde o passo-a-passo para conquistar está descrito abaixo!</li>
                <li><h3>Como funciona?</h3>
                Para participar é bem simples, logo após o registro do seu animalzinho, o cliente recebe um total de 15 tickets de convites, ao qual existe um formulário a ser preenchido com os dados pessoais da pessoa convidada. No rodapé do ticket oferecido, contém um espaço para sua assinatura,
                assim confirmando que o convite fora entregue por você. Com tudo preenchido, o último passo será apenas entregar para a DoCão e ir acumulando suas recompensas.</li>
                
                <li> <h3>Quais sao as recompensas?</h3>
                A DoCão oferece um total de 4 recompensas para o cliente, sendo separada pelos tanto de convites entregues. Essas são:</li>
                
                <li> <h4>5 convites - Shampoo</h4>
                Com 5 convites você recebe um shampoo para o cachorro totalmente gratuito, disponibilizado pelos nossos patrocinadores.</li>
                
                <li> <h4>10 convites - Banho completo</h4>
                Com 10 convites entregues, o seu pet receberá o melhor banho de sua vida. Um pacot completo totalmente por conta da casa, deixando o cheirinho de quero mais.</li>
                
                <li> <h4>15 convites - Tosa completa</h4>
                Com 15 convites, uma tosa completa é oferecida para o cliente. Caso o cachorro não seja de característica peluda, 
                essa recompensa é substituida por outro banho completo junto a um kit de brinquedos para a diversão de seu pet.</li>
                
                <li> <h4>20 convites - Combo completo</h4>
                Com 20 convites um combo completo é totalmente disponibilizado, onde no pacote está incluido: Uma tarde de passeio com seu pet, um banho completo 
                e um kit ração totalmente personalizado com os cheiros de nossa casa.</li>
                
                <li>Mensagem Especial
                Gostou das recompensa? Participe da nossa campanha, convide seu amigos e aproveite toda a magnitude que nós, DoCão, podemos oferecer para você.</li>
            </ul>
        </div>
    )
}
export default Pagina4