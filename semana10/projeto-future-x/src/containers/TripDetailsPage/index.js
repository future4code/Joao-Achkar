import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from '../Router'


class TripDetailsPage extends Component {

  render() {
   
    return (
        <div> TripsDetailsPage
         <p>puxar aqui da api dados das viagens existentes</p>    
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ 
 
  
})

export default connect (
    null, 
    mapDispatchToProps
  )(TripDetailsPage);
  