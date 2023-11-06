import React from 'react'
import Navbar from './navbar'

const Sobre = () => {
    return (
        <div>
            <Navbar />
            <div class="centralizar">
                <div class="body">
                    <h1>Petshop <strong>DoCão</strong> - Nós representamos os cachorros</h1>
                    <h2>Nós da <strong>DoCão</strong> nos responsabilizamos por:</h2>
                    <ul>
                        <li>A Adoção de nossos animaiszinhos.</li>
                        <li>O banho e tosa regular dos nossos fiéis companheiros.</li>
                        <li>Todo o amor e carinho do mundo para nossos amigos de jornada.</li>
                        <li>O devido cuidado ao melhor amigo do homem.</li>
                        <li id="grupo">Grupo: Arthur B. Cesar A. Riad A. Ana M. Henrique R. Isabela G.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sobre