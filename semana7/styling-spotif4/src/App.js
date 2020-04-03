import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Body = styled.div `
  background-color: #323B3F;
  color: white;
  height: 100vh;
  width: 100vw;
`
const Nav = styled.nav `
  background-color: #FE7E02;
  width: 100%;
  height: 50px;
  position: fixed;
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Header = styled.header `
  width: 100%;
  height: 80px;
`
const LogoSpoti = styled.p `
  color: #323B3F;
  font-weight: 900;
  font-size: 20px;
  padding-bottom: 5px;
`
const LogoF4 = styled.p `
  color: #6611c3;
  font-weight: 900;
  font-size: 20px;
  padding-bottom: 5px;
`
const NavList = styled.ul `
  list-style-type: none;
`
const NavItems = styled.li `
  display: inline; 
  padding: 2px 3vw 2px 3vw;
  border-right: 1px solid white;
  text-align: center;
`
const Main = styled.main `
  padding-left: 30px;
`
const InputBusca = styled.input `
  margin-left: 5px;
  border-style: none;
  border-radius: 4px;
  padding: 3px;
  :focus {
    outline: none;
  }
`
const CriaPlaylist = styled.a `
  text-decoration: none;
  color: white;
  :hover {
    color: #6611c3;
    font-weight: 500;
    cursor: pointer;
  }
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlist: [
        {
          id: "b8b008f0-1c43-4106-9edf-6a86b4b52c50",
          name: "Álcool Gel"
        },
        {
          id: "5527c7f6-68ea-4044-b7f7-04b80df581a0",
          name: "Rapidinha"
        }
      ]
    }
  }

 componentDidMount() {
   axios.get ('https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists')
   .then(res => {
     console.log(res);
     this.setState({playlist: res.data});
   })
 }
 createNewPlaylist = () => {
   const request = axios.get ('https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists')
    request.then((response) => {
      this.setState ({ playlist: response.data})
    })
  }

  render () {


  return (
    <Body>
      <Nav>
        <LogoSpoti>Spoti</LogoSpoti>
        <LogoF4>F4</LogoF4>
        <NavList>
          <NavItems><CriaPlaylist>Criar nova playlist</CriaPlaylist></NavItems>
          <NavItems>Suas playlists</NavItems>
          <NavItems>Suas músicas</NavItems>
          <NavItems>Busca playlist: <InputBusca/></NavItems>
        </NavList>
      </Nav>
      <Header></Header>
     <Main>
       Oi
       <button onClick={this.state.componentDidMount}>Cria playlist</button>
     </Main>
    </Body>
  );
  }
}

export default App;
