import React from 'react';

class EtapaUm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          escolaridadeSelecionada: "Ensino Médio Incompleto",
        };
      }

    render() {
        const options = ["Ensino Médio Incompleto", 
        "Ensino Médio Completo", "Ensino Superior Inompleto",
         "Ensino Superior Completo"];

        return (
            <div>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <p>1. Qual o seu nome?</p>
            <input type="text" />
            <p>2. Qual sua idade?</p>
            <input type="text" />
            <p>3. Qual seu email?</p>
            <input type="text" />
            <p>4. Qual sua escolaridade?</p>
            <select
            value={this.state.escolaridadeSelecionada}
            onChange={e => 
              this.setState({ escolaridadeSelecionada: e.target.value})
            }
            >
              {options.map(optionValue => (
                  <option value={optionValue}>{optionValue}</option>
                ))}
            </select>
            </div>
      )
    }
  }

  export default EtapaUm;