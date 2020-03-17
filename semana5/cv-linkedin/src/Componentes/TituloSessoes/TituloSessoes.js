import React from 'react'
import './TituloSessoes.css'

function TituloSessoes(props) {
    return(
        <div className="video-item">

            
            {/* <img src={require("../../imgs/CritRace.jpeg")}/> */}
            <img src={props.imgPath}/>
            <h3>{ props.texto }</h3>
        </div>
    )
}

export default TituloSessoes