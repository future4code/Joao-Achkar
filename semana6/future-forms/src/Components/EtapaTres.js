import React from 'react';

class EtapaTres extends React.Component {
    render() {
        return (

        <div>
    <h2>ETAPA 3 - INFORMAÇÕES DO ENSINO MÉDIO</h2>
        <p>1. Por que você não terminou um curso de graduação?</p>
        <input type="text" />
        <p>2. Você fez algum curso complementar?</p>
        <select>
            <option>Curso Técnico</option>
            <option>Cursos de Inglês</option>
            <option>Não fiz curso complementar</option>
        </select>
        </div>
      )
    }
  }

  export default EtapaTres;