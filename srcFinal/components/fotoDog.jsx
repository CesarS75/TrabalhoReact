import React from 'react';
import { Link } from 'react-router-dom';

function FotoDog(props){
    return (
        <div class="fotoDog">
            <div className="titulo">
                <h3>{props.raca}</h3>
            </div>
            <img src={props.foto} />
            <p>{props.text}</p>
        </div>
    )
}
export default FotoDog