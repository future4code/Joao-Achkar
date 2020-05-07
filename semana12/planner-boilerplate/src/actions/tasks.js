import axios from 'axios'

//////////////    Síncronas 
export const setAllTasks = (tasksFromApi) => ({
    type: "SET_ALL_TASKS",
    payload: {
        taskList: tasksFromApi
    }
})

//////////////    Assíncronas
export const getTasks = () => async (dispatch) => {
    try {
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/generic/joaopfa-hamilton`)
    console.log(response.data)
    dispatch(setAllTasks(response.data))
    } 
    catch (error) {
    alert("Não chegou")
    }
}

export const createTask = (body) => async (dispatch) => {
  //  console.log("cheguei no create task")
  //  console.log(body)
    try {
    const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/generic/joaopfa-hamilton`, body)
    alert("Tarefa criada com sucesso")
    dispatch(getTasks(response.data))
    }
    catch (error) {
    alert ("Não foi criada a tarefa")
    }
}