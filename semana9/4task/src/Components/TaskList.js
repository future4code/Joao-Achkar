import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { marcarTarefaComoCompleta, deletarTarefa } from '../actions/todos';



const TarefaAdicionada = styled.div `
    display: flex;
    align-items: center;
   /* justify-content: space-between;*/
    margin: 0;
    width: 100%;
    
    font-size: 25px;
    height: 65px;
    border: none;
    border-bottom: 1px solid #00000021;
    background-color: white;
    box-sizing: border-box;
`
const Delete = styled.button `
    border: solid black 0.5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    color: red;
    line-height: 20px;
    cursor: pointer;
    float: right;
    margin-left: auto;
    margin-right: 30px;
    font-size: 20px;
    outline: none;
`
const CompletaTarefa = styled.input `
    margin: 0 20px 0 30px;
`

class TaskList extends React.Component {

    render() {  
      return (<div>
        {this.props.todosList.filter((task) => {
          const filter = this.props.filter
          if(filter === 'pendentes') {
            return task.completa === false
          }
          if(filter === 'completas') {
            return task.completa === true
          }
          if(filter === 'todas') return true
        }).map(task => (
          
            <TarefaAdicionada key={task.id} 
            onClick={() => this.props.marcarTarefaComoCompleta(task.id)}>
            <CompletaTarefa type="checkbox" checked={task.completa}/>
              {task.texto}
              <Delete onClick={() => this.props.deletarTarefa(task.id)}>X</Delete>
              </TarefaAdicionada>
            ))}
            </div>
        );
    }
  }

  const mapStateToProps = (state) => {
    return {
        todosList: state.todos.todosList,
        filter: state.todos.filter
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      marcarTarefaComoCompleta: id => dispatch (marcarTarefaComoCompleta(id)),
      deletarTarefa: id => dispatch (deletarTarefa(id))
    }
  }
  
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps)(TaskList);