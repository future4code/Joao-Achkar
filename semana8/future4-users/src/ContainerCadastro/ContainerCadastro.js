import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div `
    border: black 1px solid;
    padding: 15px;
    margin: 0 auto;
    width: fit-content;
`
const Inputs = styled.input `
`
const SaveButton = styled.button `
  margin: 5px; 
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;
  ::after{
  content: '';
  z-index: -1;
  background-color: hsla(0, 0%, 100%, 0.2);
  position: absolute;
  top: -50%;
  bottom: -50%;
  width: 1.25em;
  transform: translate3d(-525%, 0, 0) rotate(35deg);
  }
  :hover::after {
    transition: transform 0.45s ease-in-out;
  transform: translate3d(200%, 0, 0) rotate(35deg);
  }
`


class ContainerCadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: "",
            emailValue:""
        };
    }
    onChangeName = (event) => {
        this.setState({ nameValue: event.target.value})
    }
    onChangeEmail = (event) => {
        this.setState({ emailValue: event.target.value})
    }
    onClickSave = () => {
        console.log(this.state.nameValue)
        console.log(this.state.emailValue)

        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }
        axios.post("https://us-central1-future-apis.cloudfunctions.net/api/users", body, {
            headers: {
                'api-token': 'joaopfa-hamilton'
            }
        }).then(() => {
            alert("Usuário criado com sucesso");
    })
        .catch(() => {
            alert("Deu ruim com requisição");
        })
    }

    render () {
    return (
    <Container>
    <label for="name"><p>Nome</p></label>
    <Inputs id="name"
    value={this.state.nameValue}
    onChange={this.onChangeName}
    ></Inputs>

    <label for="password"><p>Senha</p></label>
    <Inputs id="password"
        value={this.state.emailValue}
        onChange={this.onChangeEmail}
    ></Inputs>
        <br/>
    <SaveButton onClick={this.onClickSave}>Salvar</SaveButton>



    </Container>
    )
    }
}

export default ContainerCadastro;