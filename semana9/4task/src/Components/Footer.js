import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { marcarTodasComoCompletas, limparCompletas, filtrar } from '../actions/todos'

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
    background-color: white;
    box-sizing: border-box;
`
const Link = styled.p`
font-size: 16px;
cursor: pointer;
:hover{
    text-decoration: underline;
}
`

const Buttons = styled.button`
    border-radius: 4px;
    border: solid 0.5px transparent;
    padding: 6px 8px;
    background-color: white;
cursor: pointer;
:hover{
    border: orange 0.5px solid;
    /* border: #f7d794 0.2px solid; */
    
}
:focus{
    
    outline: none; 
}
`


class Footer extends React.Component {
    render() {  
      return (
    <ButtonActions>
        <Link onClick={this.props.marcarTodasComoCompletas}>Marcar todas como completas</Link>
        <Buttons onClick={() => this.props.filtrar('todas')}>Mostrar Todas</Buttons>
        <Buttons onClick={() => this.props.filtrar('pendentes')}>Mostrar Pendentes</Buttons>
        <Buttons onClick={() => this.props.filtrar('completas')}>Mostrar completas</Buttons>
        <Buttons onClick={this.props.limparCompletas}>Remover completas</Buttons>

    </ButtonActions>
        );
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        marcarTodasComoCompletas: () => dispatch (marcarTodasComoCompletas()),
        limparCompletas: () => dispatch (limparCompletas()),
        filtrar: (filtro) => dispatch(filtrar(filtro))
    }
  }

  export default connect(null, mapDispatchToProps)(Footer);