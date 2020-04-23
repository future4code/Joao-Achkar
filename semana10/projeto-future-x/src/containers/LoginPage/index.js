import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from '../Router'
import { logIn } from '../../actions/login'


const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

   handleLogin = event => {
     event.preventDefault();
     this.props.logIn(this.state.email, this.state.password)
   }

  handleFieldChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { goToHomePage, goTripsPage } = this.props

    return (
      <LoginWrapper onSubmit={this.handleLogin}>
        <button onClick={goToHomePage}>home</button>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button onClick={goTripsPage}>Login</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({ 
    goToHomePage: () => dispatch(push(routes.home)),
    goTripsPage: () => dispatch(push(routes.tripsPage)),
    logIn: (email, password) => dispatch(logIn(email, password))
  
})

export default connect (
  null, 
  mapDispatchToProps
)(LoginPage);
