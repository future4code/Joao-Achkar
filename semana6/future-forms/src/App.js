import React from 'react';
import './App.css';
import EtapaTres from "./Components/EtapaTres"
import EtapaDois from "./Components/EtapaDois";
import FimFormulario from './Components/FimFormulario';
import EtapaUm from './Components/EtapaUm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      etapa: 0
    };
  }

  defineEtapa = () =>{

    let etapa;
  
    switch (this.state.etapa){
      case 0:
      etapa = <EtapaUm />
      break;
      case 1:
      etapa = <EtapaDois />
      break;
      case 2:
      etapa = <EtapaTres />
      break;
      case 3:
      etapa = <FimFormulario />
      default:
      etapa = <FimFormulario />
    }
  
  return etapa;
  
  }


  onClickTrocaPagina = () => {
    this.setState ({
      etapa: this.state.etapa + 1
    })
  }
  

  render() {
    let escolaridade;

    switch (this.state.escolaridadeSelecionada) {
      case "Ensino Médio Incompleto":
        escolaridade = <EtapaTres />;
        break;
      case "Ensino Médio Completo":
        escolaridade = <EtapaTres />;
        break;
      case "Ensino Superior Inompleto":
        escolaridade = <EtapaDois />;
        break;
      case "Ensino Superior Completo":
        escolaridade = <EtapaDois />;
        break;
      default:
        escolaridade = null;
    }

  //  onClickButton = () => {
   
  //    if (escolaridade === EtapaTres) {
  //      this.setState({EtapaTres})
  //    } else {
  //      this.setState({EtapaDois})
  //    }

  //  }

    const options = ["Ensino Médio Incompleto", 
    "Ensino Médio Completo", "Ensino Superior Inompleto",
     "Ensino Superior Completo"];

  return (
    <div className="App">


    {/*  <h3>ETAPA 1 - DADOS GERAIS</h3>
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
    <br/>
    <br/>*/}
    {/* {escolaridade} */}

    {this.defineEtapa()}
    <br/><br/>
    <button
    onClick={this.onClickTrocaPagina}
    >Próxima Etapa</button>
    {/* <button onClick={e =>
     this.setState.onClickButton({escolaridadeSelecionada: e.target.value})} */}
    {/* >
      Próxima etapa
    </button> */}

    </div>
  );
}
}
export default App;
