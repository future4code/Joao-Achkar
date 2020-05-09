import styled from 'styled-components';
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getTasks } from '../../actions/tasks';

export const DayCard = styled.div`
    width: 100%;
    min-width: 100%;
    height: fit-content;
    padding: 0 15px 15px 0;
    border: dashed 2px black;
    background: #cdc6bb;
    border-radius: 10px;
 `
export const CardHeader = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: dashed 1px black;
    padding: 20px;
    margin-bottom: 10px;
 `
export const WeekDay = styled.h3 `
   margin: 0;
 `
export const TaskItens = styled.li `
   margin-left: 15px;
`

const daysOfTheWeek = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"]

class DailyCard extends React.Component {

   render() {
      const {taskList} = this.props

      const newTaskList = { }
      {taskList[0] && taskList.forEach((task)=>{
         if(newTaskList[task.day]) {
            newTaskList[task.day].push(task)
         }else{
            newTaskList[task.day]=[task]
         }
      })}

      console.log(taskList[0])

      return (
         <Fragment>
               {daysOfTheWeek.map((day) => (
            <DayCard>
               <CardHeader>
                 <WeekDay>{day} </WeekDay> 
               </CardHeader>
               {newTaskList[day] &&
                  newTaskList[day].map((task)=> {
                     return (
                       <TaskItens> {task.text} </TaskItens>    
                     )      
                  })}         
            </DayCard>
               ))}
            
         </Fragment>
      )
   }
}

const mapStateToProps = (state) => ({
      taskList: state.tasks.taskList
})

const mapDispatchToProps = (dispatch) => {
   return {
      getTasks: () => dispatch(getTasks())
   }
}


export default connect (mapStateToProps, mapDispatchToProps)(DailyCard);
