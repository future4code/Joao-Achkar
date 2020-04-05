import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NavBar from './Components/NavBar';
import GetPlaylist from './Components/GetPlayList';
import CreatePlaylist from './Components/CreatePlaylist';

const Body = styled.div`
  background-color: #323B3F;
  color: white;
  height: 100vh;
  width: 100vw;
`
const Header = styled.header`
  width: 100%;
  height: 80px;
`
const Main = styled.main`
  padding-left: 30px;
  display: flex;
  justify-content: center;
`
// const PlaylistName = styled.input`
//   margin-left: 5px;
//   border-style: none;
//   border-radius: 4px;
//   padding: 10px;
//   :focus {
//     outline: none;
//   }
// `
// const ButtonPlaylist = styled.button`
//   margin-right: 5px;
//   border-style: none;
//   border-radius: 4px;
//   padding: 10px;
//   outline: none;
//   cursor: pointer;
//   :active {
//     outline: none;
//     background-color: #FE7E02;
//     color: white;
//   }
// `

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      inputValue: '',
      componentRender: true
    }
    this.updateComponentRender = this.updateComponentRender.bind(this);
    this.reUpdateComponentRender = this.reUpdateComponentRender.bind(this);
  }

  updateComponentRender() {
    this.setState({componentRender: true})
  }
  reUpdateComponentRender() {
    this.setState({componentRender: false})
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
// let componentRender;
// switch (this.state.componentRender) {
//   case "1":
//     componentRender = 
// }

    return (
      <Body>
        <NavBar triggerParentUpdate={this.updateComponentRender}
        triggerParentReUpdate={this.reUpdateComponentRender}
        />
        <Header></Header>
        <Main>
        {this.state.componentRender ?  
        <CreatePlaylist/> : 
        <GetPlaylist/>}
        {/* <ButtonPlaylist onClick={this.createPlaylist}>Criar nova Playlist</ButtonPlaylist>
        <PlaylistName 
        onChange={this.onChangePlaylistName}
        value={this.state.inputValue} 
        placeholder={'Nome da sua playlist'}/> */}
        
        </Main>
      </Body>
    );
  }
}

export default App;
//puzzled-observation.surge.sh