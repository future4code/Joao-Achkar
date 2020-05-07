import styled from 'styled-components';
import React from "react";
import { connect } from "react-redux";
import { createTask } from "../../actions/tasks"

const PlannerLogo = styled.h2 `
   border-top: dashed 2px black;
   border-bottom: dashed 2px black;
`
const HeaderStyle = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    border-bottom: dashed 2px black;
`
const TaskCreator = styled.input `
   width: 150px;
   height: 40px;
`
const Button = styled.button `
`
const DivTaskCreator = styled.div `
  display: flex;
  justify-content: space-between;
`

class Header extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    body: {
      text: "",
      day: ""
    }
  }
}
  handleOnChange = (event) => {
    const {name, value} = event.target
    this.setState ({body: {...this.state.body, [name]: value}})
    //this.setState ({text: event.target.value})
  }
  onClickCreateTask = () => {
    this.props.createTask(this.state.body)
    this.setState ({body: {text:"", day: ""}})
  }

  //métodos
    render() {
      return <HeaderStyle>
          <PlannerLogo>Planner</PlannerLogo>
          <DivTaskCreator>
            <TaskCreator
              name="text"
              type="text"
              placeholder="O que fazer?"
              value = {this.state.body.text}
              onChange={this.handleOnChange}
            />
            <select 
            name="day"
            onChange={this.handleOnChange}
            value = {this.state.body.day}>
            <option>Nenhum</option>
            <option>Segunda-Feira</option>
            <option>Terça-Feira</option>
            <option>Quarta-Feira</option>
            <option>Quinta-Feira</option>
            <option>Sexta-Feira</option>
            <option>Sábado</option>
            <option>Domingo</option>
            </select>
            <Button type="button" onClick={this.onClickCreateTask}>Criar tarefa</Button>
          </DivTaskCreator>
      </HeaderStyle>
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      createTask: (body) => dispatch(createTask(body))
    };
  };


  export default connect
  (null,
  mapDispatchToProps)(Header);
 