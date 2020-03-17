import React from 'react';
import './MeuComponente.css'

function MeuComponente (props) {
    return (
        <div className="red-border">
        
            { props.texto }
   
        </div>
    )
}

export default MeuComponente