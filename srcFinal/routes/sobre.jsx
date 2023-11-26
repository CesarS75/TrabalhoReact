import React from 'react'
import Navbar from '../components/navbar'

const Sobre = () => {
    return (
        <div>
            <Navbar />
            <div class="flex">
                <div class="body">
                    <u><h1>Petshop <strong>DoCão</strong> - Nós somos os representantes dos cachorros.</h1></u>
                    <h2>Nós da <strong>DoCão</strong> nos responsabilizamos por:</h2>
                    <ul class="ul">
                        <li>O banho e tosa regular dos nossos fiéis companheiros.</li>
                        <li>Todo o amor e carinho do mundo para amigos de diversas origens.</li>
                        <li>A Adoção de nossos animaiszinhos.</li>
                        <li>O devido cuidado ao melhor amigo do homem.</li>
                        <a id="grupo">Grupo: Arthur B. Cesar A. Ana M. Henrique R. Estevão L.</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sobre