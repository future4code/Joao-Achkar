import React from 'react'
import { connect } from 'react-redux'
import { 
    toggleTask, 
    deleteTask, 
    markAllTasksAsCompleted, 
    removeCompletedTasks, 
    fetchAllTasks 
} from '../../actions/tasks'


class TaskList extends React.Component {

    componentDidMount(){
        this.props.fetchAllTasks();
    }

    render(){
        return (
            <div>
                <button onClick={this.props.markAllTasksAsCompleted}>Marcar todas como completas</button>
                <button onClick={this.props.removeCompletedTasks}>Remover todas as completas</button>

                {this.props.allTasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input onClick={() => this.props.toggleTask(task.id)} type="checkbox" checked={task.done} />
                            {task.text}
                            <span 
                                style={{ color: 'red' }}
                                onClick={() => this.props.deleteTask(task.id)}
                            >
                                X
                            </span>
                        </li>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allTasks: state.tasks.allTasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTask: (taskId) => dispatch(toggleTask(taskId)),
        deleteTask: (taskId) => dispatch(deleteTask(taskId)),
        markAllTasksAsCompleted: () => dispatch(markAllTasksAsCompleted()),
        removeCompletedTasks: () => dispatch(removeCompletedTasks()),
        fetchAllTasks: () => dispatch(fetchAllTasks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)