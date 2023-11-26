import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div>
            <div className="navbar">
                <section class="foto">
                    <a>Petshop - <strong>DoCão</strong> </a>
                </section>
                <section className="nav">
                    <Link to="/contact">Contato</Link>
                    <Link to="/sobre">Sobre</Link> 
                    <Link to="/Pagina1">Banhos e Tosa</Link> 
                    <Link to="/Pagina2">Modelos</Link> 
                    <Link to="/Pagina3">Adoção</Link> 
                    <Link to="/Pagina4">Bônus</Link>
                </section>
            </div>
            <marquee behavior="alternate" direction="right">Nós <strong>NÃO</strong> nos misturamos com os gatos.</marquee>
        </div>
    )
}
export default Navbar