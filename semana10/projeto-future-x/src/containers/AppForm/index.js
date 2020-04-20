import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from '../Router'


class AppForm extends Component {

  render() {
    const { goToHomePage } = this.props
    return (
        <div> 
          <Button onClick={goToHomePage}>Back to home</Button>  AppForm
          aqui vai o form pro usuário se candidatar a uma viagem
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ 
    goToHomePage: () => dispatch(push(routes.home))
  
})

export default connect (
    null, 
    mapDispatchToProps
  )(AppForm);
  