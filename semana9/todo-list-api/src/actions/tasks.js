import axios from 'axios';

// Ações síncronas (burras)

export const setAllTasks = (allTasks) => {
    return {
        type: "SET_ALL_TASKS",
        payload: {
            allTasks: allTasks
        }
    }
}
 
// Ações assíncronas

export const markAllTasksAsCompleted = () => async (dispatch, getState) => {
    const allTasks = getState().tasks.allTasks;
    const pendingTasks = allTasks.filter(task => task.done === false)

    pendingTasks.forEach(pendingTask => {
        dispatch(toggleTask(pendingTask.id))
    })
}

export const removeCompletedTasks = () => async (dispatch, getState) => {
   const response = await axios.delete("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/soter/todos/delete-done");

   dispatch(fetchAllTasks());
}

export const addTask = (text) => async (dispatch, getState) => {
    const body = {
        text: text
    }

    const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/soter/todos", body)

    dispatch(fetchAllTasks());
}

export const deleteTask = (taskId) => async (dispatch, getState) => {
   const response = await axios.delete(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/soter/todos/${taskId}`)

   dispatch(fetchAllTasks());
}

export const toggleTask = (taskId) => async (dispatch, getState) => {
    const response = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/soter/todos/${taskId}/toggle`)

    dispatch(fetchAllTasks());
}

export const fetchAllTasks = () => async (dispatch, getState) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/soter/todos")

    dispatch(setAllTasks(response.data.todos))
}