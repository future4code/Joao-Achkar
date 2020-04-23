import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from '../Router'

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


class CreateTripsPage extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        form: {
          planet: '',
          startDate: new Date()
        },
        
      };
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
    const { goToHomePage } = this.props
    return (
        <div> CreateTripsPage  <button onClick={goToHomePage}>Voltar pra Home</button>
         <p>criar form aqui que manda pra api dados de uma nova viagem disponível</p>    

         <FormBox onSubmit={this.handleFormSubmit}>
      
            <TextField
            name="name"
            required
            type="text"
            inputProps={{pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{5,}", 
            title: "O nome deve conter no mínimo 5 letras"}}            
            onChange={this.handleInputChange}
            label="Nome da viagem"
            value={this.state.form.name || "" }
            />           
            <MyLabels>Planetas:</MyLabels>
              <select
                name="planet"
                required
                onChange={this.handleInputChange}
                // value={this.state.createForm.planet} n sei o que rolou aqui =/
                >
                <option>Mercúrio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Júpiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>
              </select>
            <MyLabels>Data</MyLabels>
            <input
            name="date"
            required
            type="date"
            onChange={this.handleInputChange}          
            label="Data"
            />
            <TextField
            name="description"
            required
            type="text"
            pattern="regex"
            onChange={this.handleInputChange}
            id="standard-multiline-static"
            label="Descrição da viagem"
            multiline
            inputProps={{pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{50,}", 
            title: "A sua resposta deve conter no mínimo 50 caracteres"}} 
            rows={8}
            defaultValue=""
            />
            <MyLabels>Duração em dias:</MyLabels>
            <TextField
            name="durationInDays"
            required
            type="number"
            onChange={this.handleInputChange}
            value={this.state.form.durationInDays || "" }
            inputProps={{ min: 50 }}
            />
       

            
            <Button type="submit">Enviar!</Button>
          </FormBox>


         
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ 
 goToHomePage: () => dispatch(push(routes.home)),
  
})

export default connect (
    null, 
    mapDispatchToProps
  )(CreateTripsPage);
  

