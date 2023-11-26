import React from 'react'
import { Link } from 'react-router-dom'
  
function Login(){
    return (
        <div class="forms">
            <form>
                <label>
                    <p>Nome</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Senha</p>
                    <input type="password" />
                </label>
                <label>
                    <p></p>
                    <Link to="/Home">Acessar</Link>
                </label>
            </form>
        </div>
    )
}
export default Login