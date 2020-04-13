import React from 'react';
import styled from 'styled-components';

const ButtonActions = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    width: 100%;
    padding-left: 10px;
    font-size: 25px;
    height: 65px;
    border: none;

`

class Footer extends React.Component {
    constructor(props){
      super(props);
      this.state = {}
    }

    render() {  
      return (
        <ButtonActions>
        <button>Marcar todas como completas</button>
        <button>Mostrar Todas</button>
        <button>Mostrar Pendentes</button>
        <button>Mostrar completas</button>

    </ButtonActions>
        );
    }
  }
  
  export default Footer;
