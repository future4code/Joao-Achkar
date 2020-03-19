import React from 'react'
import './App.css'
import MeuComponente from './Componentes/MeusComponentes/MeuComponente'
import ContainerInfos from './Componentes/ContainerInfos/ContainerInfos'
import TituloSessoes from './Componentes/TituloSessoes/TituloSessoes'

function App() {
  return (
    <div className="App">
<TituloSessoes TituloSessoes={"Dados Pessoais"} />
<ContainerInfos imgPath={require("./imgs/eu_perfil.jpeg")} titulo={"João Pedro Fonseca Achkar, 28"} texto={"Muito prazer! Me chamo João Pedro, e é uma honra recebê-lo em meu currículo =) Sou um jovem belorizontino, a alguns passos de completar 29 anos, que vem buscando pouco a pouco me realocar na vida profissional, conjugando esta caminhada com as minhas pedaladas por uma sociedade mais ciclística e menos carrodependente."} />


<ContainerInfos imgPath={require("./imgs/email.png")} texto={"Email: joaopfa@hotmail.com"} />
<ContainerInfos imgPath={require("./imgs/endereco.svg")} texto={"Endereco: Rua da Bahia 1759"} />

<TituloSessoes TituloSessoes={"Experiências Profissionais"} />
<ContainerInfos titulo={"Future4"} texto={"Aluno dedicado e esforçado nesta escola de qualidade"} />



    </div>
  );
}

export default App;
