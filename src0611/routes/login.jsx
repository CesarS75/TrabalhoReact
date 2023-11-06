import React from 'react'
import { Link } from 'react-router-dom'
  
function Login(){
    return (
        <div>
            <form>
                <label>
                    <input type="text" />
                </label>
                <label>
                    <input type="password" />
                </label>
                <label>
                    <Link to="/Home">Acessar</Link>
                </label>
            </form>
        </div>
    )
}
export default Login