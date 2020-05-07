import styled from 'styled-components';
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getTasks } from '../../actions/tasks';

const DayCard = styled.div`
    width: 100%;
    height: 100%;
    border: dashed 2px black;
 `
const CardHeader = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: dashed 1px black;
 `

const daysOfTheWeek = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"]

class DailyCard extends React.Component {



   render() {
      return (
         <Fragment>
               {daysOfTheWeek.map((day) => (
            <DayCard>
               <CardHeader>
                  {day}
               </CardHeader>

               
            </DayCard>
               ))}
            
         </Fragment>
      )
   }
}

// const mapStateToProps = (state) => {
//    return {
//       taskList: state.tasksFromApi.taskList
//    }
// }


export default connect()(DailyCard);
