const initialState = {
    todosList: [
    {
        id: 1,
        texto: 'vaarrer lavar',
        completa: false,
    },
    {
        id: 2,
        texto: 'Tarefa 2 do redux',
        completa: true,
    }
  ]
}

const todos = (state = initialState, action) => {
     console.log('ACTION', action)
     console.log('STATE', state)
    switch (action.type) {
        case 'ADD_TAREFA':
            const novaTarefa = {
            id: Date.now(),
            texto: action.payload.texto,
            completa: false
            };
            return {
                todosList: [novaTarefa, ...state.todosList]
            }

        case 'MARCAR_TAREFA_COMO_COMPLETA':
            const newTodosList = state.todosList.map(todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completa: !todo.completa
                    }
                }
                return todo;
            })
            return {
               todosList: newTodosList
            }

        case 'DELETA_TAREFA':
            return {
                ...state, 
                id: action.payload.id, 
                completa: action.payload.completa
            }   
        default: 
            return state;

    }
}



export default todos;