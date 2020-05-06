const initialState = {
    taskList: []
};

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ALL_TASKS": {
            return { ...state, taskList: action.payload.taskList }
        }
    }
}