import React from 'react'
import { connect } from 'react-redux';
import { addTask } from '../../actions/tasks'

class TaskForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newTaskText: ''
        }
    }

    handleOnChange = (event) => {
        const newText = event.target.value;
        this.setState({ newTaskText: newText })
    }

    handleCreateTask = () => {
        this.props.addTask(this.state.newTaskText)
    }

    render(){
        

        return (
            <div>
                <input
                    type="text"
                    value={this.state.newTaskText}
                    onChange={this.handleOnChange}
                />
                <button onClick={this.handleCreateTask}>Criar Tarefa</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (text) => dispatch(addTask(text))
    }
} 

export default connect(null, mapDispatchToProps)(TaskForm)