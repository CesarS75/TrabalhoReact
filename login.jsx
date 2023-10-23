import React from 'react'
import { Link } from 'react-router-dom'
  
function MyForm(){
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
                    <Link to="/">Acessar</Link>
                </label>
            </form>
        </div>
    )
}
export default MyForm