import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import styled from "styled-components";
import { routes } from '../Router'


class HomePage extends Component {

  render() {
    const { goToLoginPage, goToAppFormPage } = this.props
    return (
        <div>HomePage
          <Button onClick={goToLoginPage}>login page</Button>  
          <Button onClick={goToAppFormPage}>app form page</Button>  
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ 
    goToLoginPage: () => dispatch(push(routes.root)),
    goToAppFormPage: () => dispatch(push(routes.appForm))
})

export default connect (
    null, 
    mapDispatchToProps
  )(HomePage);
  