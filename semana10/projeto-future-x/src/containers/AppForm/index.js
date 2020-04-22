import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from '../Router'
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from "react-datepicker";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const FormBox = styled.form `
  margin: auto;
  min-width: 330px;
  width: 40vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
`
const MyLabels = styled.label `
  margin-top: 20px;
`


class AppForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        country: '',
        startDate: new Date()
      },
      
    };
  }

handleChange = date => {
  this.setState({
      startDate: date
   });
};

selectCountry (val) {
  this.setState({ country: val });
}

handleFormSubmit = event => {
  event.preventDefault()
  console.log(this.state.form)
  this.setState({ form: {} })
}

handleInputChange = event => {
  const { name, value } = event.target;
  console.log(name, value);
  this.setState({
    form: { ...this.state.form, [name]: value }
  });
};


  render() {
    const { country } = this.state;
    const { goToHomePage } = this.props
    // const classes = useStyles();
    return (
        <div> 
          <Button onClick={goToHomePage}>Voltar pra home</Button>  AppForm
          aqui vai o form pro usuário se candidatar a uma viagem

        <FormBox onSubmit={this.handleFormSubmit}>
            <MyLabels>Nome completo:</MyLabels>
            <TextField
            name="name"
            required
            type="text"
            inputProps={{pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{5,}", 
            title: "O nome deve conter no mínimo 5 letras"}}            
            onChange={this.handleInputChange}
            value={this.state.form.name || "" }
            />
            <MyLabels>Idade:</MyLabels>
            <TextField
            name="age"
            required
            type="number"
            onChange={this.handleInputChange}
            value={this.state.form.age || "" }
            inputProps={{ min: 18, max: 100 }}
            />
            {/* //<MyLabels>Por que você?</MyLabels> */}
            <TextField
            name="applicationText"
            required
            type="text"
            pattern="regex"
            onChange={this.handleInputChange}
            id="standard-multiline-static"
            label="Por que você?"
            inputProps={{pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{50,}", 
            title: "A sua resposta deve conter no mínimo 50 caracteres"}} 
            multiline
            rows={8}
            defaultValue=""
            />
            <MyLabels>Profissão:</MyLabels>
            <TextField
            name="profession"
            required
            type=""
            pattern="regex"
            onChange={this.handleInputChange}
            />
            <MyLabels>País de origem:</MyLabels>
            <CountryDropdown
            value={country}
            onChange={(val) => this.selectCountry(val)} />

            <Button type="submit">Enviar!</Button>
          </FormBox>

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
  