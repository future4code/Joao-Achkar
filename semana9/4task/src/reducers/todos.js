const initialState = {
    todosList: [
    {
        id: 1,
        texto: 'vaarrer lavar'
    },
    {
        id: 2,
        texto: 'Tarefa 2 do redux'
    }
  ]
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TAREFA':
            return {
                ...state, 
                id: action.payload.id, 
                texto: action.payload.completa, 
                completa: action.payload.completa
            }
        case 'MARCAR_TAREFA_COMO_COMPLETA':
            return {
                ...state, 
                id: action.payload.id, 
                completa: action.payload.completa
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