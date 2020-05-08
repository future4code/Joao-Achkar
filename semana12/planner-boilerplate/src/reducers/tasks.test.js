import tasks from './tasks'
import setAllTasks from '../actions/tasks'

describe("Tasks Reducer", () => {
    test("SET_ALL_TASKS - first task", () => {
        //Preparação
        const newTaskMockText = {text: "I'm a test Task" }
        const mockAction = setAllTasks(newTaskMockText)
        const mockState = {taskList: []}
        //Execução
        const newState = tasks(mockState, mockAction);
        //Verificaço
        expect(newState.taskList).toHaveLength(1)
        expect(newState.taskList[0].text).toBe(newTaskMockText[0].text)
    })
})