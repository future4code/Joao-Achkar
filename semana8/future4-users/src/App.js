import React from 'react';
import BotaoPaginaLista from './BotaoPaginaLista/BotaoPaginaLista'
import ContainerCadastro from './ContainerCadastro/ContainerCadastro'
import PaginaLista from './PaginaLista/PaginaLista'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPage: 'ContainerCadastro'
    }
  }

  onClickButton = () => {
    let newPage;

    switch (this.state.selectedPage)  {
      case 'ContainerCadastro':
        newPage = 'PaginaLista'
        break;
      case 'PaginaLista':
        newPage = 'ContainerCadastro'
        break;
    
      default:
        newPage = "ContainerCadastro"
        break;
    }
    this.setState({ selectedPage: newPage})
  }

  getPageToRender = () => {
    switch (this.state.selectedPage) {
      case "ContainerCadastro":
        return <ContainerCadastro/> ;
      case "PaginaLista": 
        return <PaginaLista/>;
      default:
        return <ContainerCadastro/>;
    }
  }


  render() {
   
  return (
    <div className="App">
      <button onClick={this.onClickButton}>Ir pra pagina </button>
      {this.getPageToRender()}
      {/* <ContainerCadastro/> 
      <PaginaLista/> */}
    </div>
  );
  }
}

export default App;
