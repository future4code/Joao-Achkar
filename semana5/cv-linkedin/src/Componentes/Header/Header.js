import React from 'react'
import './Header.css'
import TituloSessoes from '../TituloSessoes/TituloSessoes'

function Header(){
    return(
        <div className="header">
      <img src={require("../../imgs/eu_perfil.jpeg")}/>
      {/* <TituloSessoes texto={"Vídeo corrida"} imgPath={require("../../imgs/eu_perfil.jpeg")} /> */}

        </div>
    )
}

export default Header