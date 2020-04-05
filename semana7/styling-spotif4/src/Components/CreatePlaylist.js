import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const PlaylistName = styled.input`
  margin-left: 5px;
  border-style: none;
  border-radius: 4px;
  padding: 10px;
  :focus {
    outline: none;
  }
`
const ButtonPlaylist = styled.button`
  margin-right: 5px;
  border-style: none;
  border-radius: 4px;
  padding: 10px;
  outline: none;
  cursor: pointer;
  :active {
    outline: none;
    background-color: #FE7E02;
    color: white;
  }
`

class CreatePlaylist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        playlist: [],
        inputValue: '',
      }
    }
  
  
    onChangePlaylistName = (event) => {
    this.setState({inputValue: event.target.value})
    }
  
    createPlaylist = () => {
      const body = {
        name: this.state.inputValue
      }
      axios
      .post(
        'https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists', 
        body, {
        headers: {
          auth: 'joaopfa-hamilton'
        }
  
      }).then((response) => {
        console.log(response)
      }).catch(() => {
        console.log('error')
      })
    }
  
    render() {
  
      return (
        <div>
          <ButtonPlaylist onClick={this.createPlaylist}>Criar nova Playlist</ButtonPlaylist>
          <PlaylistName 
          onChange={this.onChangePlaylistName}
          value={this.state.inputValue} 
          placeholder={'Nome da sua playlist'}/>
        </div>
      );
    }
  }
  
  export default CreatePlaylist;