import {setAllTasks} from './tasks'

describe ("Tasks Actions", () => {
    test("setAllTasks", () => {
        //Preparação
        const mockTaskText = "Testing mock for setAllTasks."
        //Execução
        const action = setAllTasks(mockTaskText)
        //Verificação
        expect(action.type).toBe("SET_ALL_TASKS")
        expect(action.payload.taskList).toBe(mockTaskText)
    })
})