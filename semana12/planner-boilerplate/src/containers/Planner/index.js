import React from "react";
import { connect } from "react-redux";
import DailyCard from "../DailyCard/index";
import styled from 'styled-components';
import { getTasks } from '../../actions/tasks'
import Header from "../Header/index"

const GridBody = styled.div `
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 70vh;
  grid-gap: 20px;
`
const Body = styled.div `
  width: 100vw;
  height: 100%;
  border-bottom: dashed 2px black;
`
class Planner extends React.Component {
  componentDidMount () {
    this.props.getTasks()
  }

  render() {
    return <Body>
    <Header/>
    <GridBody>
     
      <DailyCard/>
      <DailyCard/>
      <DailyCard/>
      <DailyCard/>
      <DailyCard/>
      <DailyCard/>
      <DailyCard/>

      </GridBody>
    </Body>
  }
}
 const mapDispatchToProps = dispatch => {
   return{
     getTasks: () => dispatch(getTasks())
   }
}

export default connect
(null, mapDispatchToProps)
(Planner);
