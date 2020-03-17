import React from 'react'
import './ContainerInfos.css'

function ContainerInfos(props) {
    return(
        <div className="container-infos email">
       <img src={props.imgPath}/>
       <h3>{ props.titulo }</h3> 
        
        { props.texto }
            
            {/* <img src={require("../../imgs/CritRace.jpeg")}/> */}
            
            
        </div>
    )
}

export default ContainerInfos