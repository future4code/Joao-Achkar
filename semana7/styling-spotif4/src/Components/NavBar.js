import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GetPlaylist from './GetPlayList';
import CreatePlaylist from './CreatePlaylist';

const Nav = styled.nav`
  background-color: #FE7E02;
  width: 100%;
  height: 50px;
  position: fixed;
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LogoSpoti = styled.p`
  color: #323B3F;
  font-weight: 900;
  font-size: 20px;
  padding-bottom: 5px;
`
const LogoF4 = styled.p`
  color: #6611c3;
  font-weight: 900;
  font-size: 20px;
  padding-bottom: 5px;
`
const NavList = styled.ul`
  list-style-type: none;
`
const NavItems = styled.li`
  display: inline; 
  padding: 2px 3vw 2px 3vw;
  border-right: 1px solid white;
  text-align: center;
`
const InputBusca = styled.input`
  margin-left: 5px;
  border-style: none;
  border-radius: 4px;
  padding: 3px;
  :focus {
    outline: none;
  }
`
const RenderClick = styled.a`
  text-decoration: none;
  color: white;
  :hover {
    color: #6611c3;
    font-weight: 500;
    cursor: pointer;
  }
`
const SubNav = styled.ul `
    position: absolute;
    display: none;
`

class NavBar extends React.Component {


    


    // constructor(props) {
    //     super(props)
    //     this.state={
    //         selctedPage: 'CreatePlaylist',
    //         componentRender: true
    //     }
    // }

    // onClickButton = () => {
    //   let bodyPage;

    //   switch (this.state.selctedPage) {
    //     case 'CreatePlaylist':
    //       bodyPage = 'CreatePlaylist'
    //       break;
    //     case 'GetPlayList':
    //       bodyPage = 'GetPlayList'
    //       break;
    //     default:
    //       bodyPage = "CreatePlaylist"
    //   }
    //   this.setState({ selctedPage: bodyPage})
    // }

    // getPageToRender = () => {
    //   switch (this.state.selectedPage) {
    //     case "CreatePlaylist":
    //       return <CreatePlaylist/>;
    //     case "GetPlayList":
    //       return <GetPlaylist/>;
    //     default:
    //       return <CreatePlaylist/>
    //   }
    // }


    render() {
    return (
        <Nav>
        <LogoSpoti>Spoti</LogoSpoti>
        <LogoF4>F4</LogoF4>
        <NavList>
          <NavItems><RenderClick onClick={this.props.triggerParentUpdate}>Criar nova playlist</RenderClick></NavItems>
           
          <NavItems><RenderClick onClick={this.props.triggerParentReUpdate}>Suas playlists</RenderClick></NavItems>
          <NavItems>Busca playlist: <InputBusca /></NavItems>
        </NavList>
      </Nav>
        );
    }
  }
  
  export default NavBar;
  