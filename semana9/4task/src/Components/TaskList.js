import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { marcarTarefaComoCompleta } from '../actions/todos';



const TarefaAdicionada = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    width: 100%;
    padding-left: 50px;
    font-size: 25px;
    height: 65px;
    border: none;
    border-bottom: 1px solid #00000021;
    background-color: white;
    box-sizing: border-box;
`

class TaskList extends React.Component {

    render() {  
      return (<div>
        {this.props.taskList.map(task => (
            <TarefaAdicionada key={task.id} 
            onClick={() => this.props.marcarTarefaComoCompleta(task.id)}>
              {task.texto} - Completa: {String(task.completa)}
              </TarefaAdicionada>
            ))}
            </div>
        );
    }
  }

  const mapStateToProps = (state) => {
    return {
        taskList: state.todos.todosList
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      marcarTarefaComoCompleta: id => dispatch (marcarTarefaComoCompleta(id))
    }
  }
  
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps)(TaskList);