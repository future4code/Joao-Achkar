import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { marcarTodasComoCompletas } from '../actions/todos'

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
        <Link onClick={() => this.props.marcarTodasComoCompletas()}>Marcar todas como completas</Link>
        <Buttons>Mostrar Todas</Buttons>
        <Buttons>Mostrar Pendentes</Buttons>
        <Buttons>Mostrar completas</Buttons>

    </ButtonActions>
        );
    }
  }

  const mapStateToProps = (state) => {
    return {
        
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        marcarTodasComoCompletas: completa => dispatch (marcarTodasComoCompletas(completa))
    }
  }

  export default connect(
    mapStateToProps, 
    mapDispatchToProps)(Footer);