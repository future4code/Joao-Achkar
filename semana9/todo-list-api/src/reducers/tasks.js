const initialState = {
    allTasks: []
}

const tasks = (state = initialState, action) => {

    switch(action.type){
        case 'SET_ALL_TASKS': {
            return {...state, allTasks: action.payload.allTasks }
        }

        case 'MARK_ALL_TASKS_AS_COMPLETED':{
            const newAllTasks = state.allTasks.map(task => {
                task.done = true;
                return task
            })

            return { ...state, allTasks: newAllTasks }
        }

        case 'REMOVE_COMPLETED_TASKS':{
            const newAllTasks = state.allTasks.filter((task) => {
                if(task.done === true){
                    return false;
                }
                return true;
            })

            return { ...state, allTasks: newAllTasks }
        }

        default:
            return state;
    }
}

export default tasks;