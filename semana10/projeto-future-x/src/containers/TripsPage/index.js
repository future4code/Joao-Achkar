import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from '../Router'
import CreateTripsPage from "../CreateTripsPage";


class TripsPage extends Component {

  render() {
    const { goToCreateTripsPage, goToListTripsPage, goToTripDetailsPage } = this.props
    return (
        <div> TripsPage
          <Button onClick={goToCreateTripsPage}>Criar nova viagem </Button>  
          <Button onClick={goToListTripsPage}>Ver viagens existentes</Button>  
          <Button onClick={goToTripDetailsPage}>Ver detalhes das viagens existentes</Button>  
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ 
    goToCreateTripsPage: () => dispatch(push(routes.createPage)),
    goToListTripsPage: () => dispatch(push(routes.listPage)),
    goToTripDetailsPage: () => dispatch(push(routes.detailsPage))
  
})

export default connect (
    null, 
    mapDispatchToProps
  )(TripsPage);
  