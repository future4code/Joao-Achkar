import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const BotaoPraPaginaRegistro = styled.button `
    border: black 1px solid;
    margin: 10px;
`
const ListaUsuariosCadastrados = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

`
const ListaNomes = styled.ul `
    list-style: none;
`
const ContainerNomeUsuario = styled.div `
    display: flex;
    justify-content: space-between; 
    border-bottom: 1px solid black;
    
`
const XisDelete = styled.p `
    color: red;
    cursor: pointer;
    margin-left: 40px; 
`

class PaginaLista extends React.Component  {
    constructor(props) {
        super(props)
        this.state= {
            usersList: []
        }
    }


    componentDidMount() {
        axios
        .get("https://us-central1-future-apis.cloudfunctions.net/api/users",{
            headers: {
                "api-token":"joaopfa-hamilton"
            }
        })
        .then((response) => {
            console.log(response.data.result)
            this.setState ({ usersList: response.data.result })
        })
    }

    renderizaLista = () => {
        const auxiliar = this.state.usersList.map((elemento) => {
            return (
                <ListaUsuariosCadastrados
                  key = {elemento.id}
                >
                    <ContainerNomeUsuario>
                    <p>{elemento.name}</p>
                     <XisDelete
                 onClick={() => this.deleteUser(elemento.id, elemento.name)}
                 >X</XisDelete>
                </ContainerNomeUsuario>


                </ListaUsuariosCadastrados>
            )
        })
        return auxiliar;
    }

    deleteUser = (id, name) => {
        axios
        .delete(`https://us-central1-future-apis.cloudfunctions.net/api/users/${id}`, {
            headers: {
                "api-token": "joaopfa-hamilton"
            }
        })
        .then(() => {
            alert( "usuário "+ name +" deletado")
        })
        .catch(() => {
            alert("deu erro")
        })
    }

    render () {
    return (
    <div>

    <ListaUsuariosCadastrados>
        <h1>Usuários Cadastrados</h1>

        {this.renderizaLista()}

  
    </ListaUsuariosCadastrados>
    </div>
    )
    }
}

export default PaginaLista;  

{/* <ListaNomes>
            {this.state.usersList.map((user) => {
                return (
                <NomeUsuario><p>{user.name}</p><XisDelete>X</XisDelete></NomeUsuario>
                )
            })}


        </ListaNomes> */}