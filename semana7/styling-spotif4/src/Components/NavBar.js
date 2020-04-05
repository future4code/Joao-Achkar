import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GetPlaylist from './GetPlayList';

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
const CriaPlaylist = styled.a`
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
    constructor() {
        super()
        this.state={
            showFormToPlaylist: true,
        }
    }

    dropDown = () => {
        this.render (
                <SubNav>
                    <li>Input </li>
                </SubNav>
        )
    }

    render() {
    return (
        <Nav>
        <LogoSpoti>Spoti</LogoSpoti>
        <LogoF4>F4</LogoF4>
        <NavList>
          <NavItems><CriaPlaylist onClick={this.dropDown}>Criar nova playlist</CriaPlaylist></NavItems>

          <NavItems onClick={GetPlaylist}>Suas playlists</NavItems>
          <NavItems>Suas músicas</NavItems>
          <NavItems>Busca playlist: <InputBusca /></NavItems>
        </NavList>
      </Nav>
        );
    }
  }
  
  export default NavBar;
  