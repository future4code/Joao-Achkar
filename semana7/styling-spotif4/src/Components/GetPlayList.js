import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DivPlaylists = styled.div `
    border: 3px solid #FE7E02; 
    background-color: #FE7E02;
    width: 300px;
    height: fit-content;
    margin: 30px;
    border-radius: 5px;
    
`
const Playlists = styled.p `
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
`
const DelIcon = styled.img `
  height: 20px;
  background-color: white;
  padding: 2px;
  border-radius: 2px;
  cursor: pointer;
`

class GetPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: []
          }
    }
 
    componentDidMount() {
      axios
        .get ('https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists',
        {
            headers: {
              auth: 'joaopfa-hamilton'
            }
        })
        .then((response) => {
          console.log(response.data.result.list)
          this.setState ({ playlist: response.data.result.list })
        })
    }

    renderPlaylist = () => {
      const aux = this.state.playlist.map((lista) => {
        return (
          <Playlists key = {lista.id}>{lista.name} <DelIcon onClick={() => this.deletePlaylist(lista.id, lista.name)}  src={require("./imgs/bin.png")} alt="Deletar playlist"/></Playlists>
        )
      })
      return aux;
    }

    deletePlaylist = (id, name) => {
      //função para confirmar se quieres deletar
       if (window.confirm ("Deseja deletar a playlist " + name + "?")) {
      //função para confirmar se quieres deletar

//função pra remover na hora
      let listaParaDeletar
      for(const lista of this.state.playlist) {
        if (lista.id === id) {
          listaParaDeletar = lista
        }
      }
      const playlistCopia = [...this.state.playlist]
      const indiceParaDeletar = playlistCopia.indexOf(listaParaDeletar)
      playlistCopia.splice(indiceParaDeletar, 1)
      this.setState({
        playlist: playlistCopia
      })
//função pra remover na hora

//função pra remover do banco de dados/api
       axios
       .delete(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${id}`,
       {
         headers: {
           auth: 'joaopfa-hamilton'
         }
       })
       .then(() => {
         alert("Playlist " + name + " deletada")
       })
       .catch(() => {
         alert("erro")
       })
       } else {
         window.alert("Playlist mantida")
       }
//função pra remover do banco de dados/api
     }




    render() {
        
    return (
        
        <DivPlaylists>
          {this.renderPlaylist()}
        </DivPlaylists>
        );
    }
  }
  
  export default GetPlaylist;