import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Header = styled.div `
    
`

class Header extends React.Component {

  render() {

    return (
        <div> 
          <Button onClick={goToHomePage}>Back to home</Button>  AppForm
          aqui vai o form pro usuário se candidatar a uma viagem
        </div>
    );
  }
}

export default Header;