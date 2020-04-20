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
    ],
    filter: 'todas'
}

const todos = (state = initialState, action) => {
    console.log('ACTION', action)
    console.log('STATE', state)
    switch (action.type) {
        case 'ADD_TAREFA':{                     
            const novaTarefa = {
                id: Date.now(),
                texto: action.payload.texto,
                completa: false
            };
            if (action.payload.texto !== '')  { 
            return {...state,
                todosList: [novaTarefa, ...state.todosList]
            }          
        }
    }
        case 'MARCAR_TAREFA_COMO_COMPLETA':
            {
                const newTodosList = state.todosList.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            completa: !todo.completa
                        }
                    }
                    return todo;
                })
                return {...state,
                    todosList: newTodosList
                }
            }
        case 'DELETAR_TAREFA': {
            const newTodosList = state.todosList.filter(todo => {
                if (todo.id === action.payload.id) {
                    return false
                }
                return true
            })
            return {...state,
                todosList: newTodosList
            }
        }
        case 'MARCAR_TODAS_COMO_COMPLETAS':
            const todosListDone = state.todosList.map(todo => {
                if (todo.completa === false) {
                    return {
                        ...todo,
                        completa: !todo.completa
                    }
                }
                return todo
            })
            return {...state,
                todosList: todosListDone
            }
        case 'LIMPAR_COMPLETAS': {
            const newTodosList = state.todosList.filter(todo => {
                if (todo.completa) {
                    return false
                }
                return true
            })
            return {...state,
                todosList: newTodosList
            }
        }
        case 'FILTRAR': {
           return {
               ...state,
               filter: action.payload.filter
           }
        }
        
        default:
            return state;

    }
}



export default todos;