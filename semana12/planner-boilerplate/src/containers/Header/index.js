import styled from 'styled-components';
import React from "react";
import { connect } from "react-redux";

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

class Header extends React.Component {
    render() {
      return <HeaderStyle>
          <PlannerLogo>Planner</PlannerLogo>
          <TaskCreator/><Button>Criar tarefa</Button>
      </HeaderStyle>
    }
  }
  export default connect()(Header);
 