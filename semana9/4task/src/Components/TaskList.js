import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { marcarTarefaComoCompleta, deletarTarefa } from '../actions/todos';



const TarefaAdicionada = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  margin-right: 30px;
  font-size: 20px;
  outline: none;
`

class TaskList extends React.Component {

    render() {  
      return (<div>
        {this.props.taskList.map(task => (
            <TarefaAdicionada key={task.id} 
            onClick={() => this.props.marcarTarefaComoCompleta(task.id)}>
              {task.texto} - Completa: {String(task.completa)}
              <Delete onClick={() => this.props.deletarTarefa(task.id)}>X</Delete>
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
      marcarTarefaComoCompleta: id => dispatch (marcarTarefaComoCompleta(id)),
      deletarTarefa: id => dispatch (deletarTarefa(id))
    }
  }
  
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps)(TaskList);