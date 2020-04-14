const initialState = {
    id: 'id',
    texto: '',
    completa: ''
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

    }
}



export default todos;