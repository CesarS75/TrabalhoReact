import React from 'react'
import { Link } from 'react-router-dom'
  
function Navbar(){
    return (
        <div>
            <div className="navbar">
                <section class="foto">
                    <img src="" alt="F" width="100px" height="100px"/>
                </section>
                <section className="nav">
                    <Link to="/contact">Contato</Link>
                    <Link to="/sobre">Sobre</Link> 
                    <Link to="/Pagina1">Pagina 1</Link> 
                    <Link to="/Pagina2">Pagina 2</Link> 
                    <Link to="/Pagina3">Pagina 3</Link> 
                    <Link to="/Pagina4">Pagina 4</Link>
                </section>
            </div>
            <marquee behavior="alternate" direction="right">Nós <strong>NÃO</strong> nos misturamos com os gatos.</marquee>
        </div>
    )
}
export default Navbar