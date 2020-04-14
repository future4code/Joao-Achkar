export function  adicionarTarefa (id, texto) {
    return {
        type: 'ADD_TAREFA',
        payload: {
            id: id,
            texto: texto,
            completa: false,
        }
    }
}

export function  marcarTarefaComoCompleta (id, completa) {
    return {
        type: 'MARCAR_TAREFA_COMO_COMPLETA',
        payload: {
            id: id,
            completa: false,
        }
    }
}


export function  deletarTarefa (id, completa) {
    return {
        type: 'DELETA_TAREFA',
        payload: {
            id: id,
            completa: false,
        }
    }
}

export function  marcarTodasComoCompletas (id, completa) {
    return {
        type: 'MARCAR_TODAS_COMO_COMPLETAS',
        payload: {
            id: id,
            completa: false,
        }
    }
}

export function  mostrarTodas (id, completa) {
    return {
        type: 'MOSTRA_TODAS',
        payload: {
            id: id,
            completa: false,
        }
    }
}

export function  mostrarPendentes (id, completa) {
    return {
        type: 'MOSTRAR_PENDENTES',
        payload: {
            id: id,
            completa: false,
        }
    }
}

export function  mostrarPendentes (id, completa) {
    return {
        type: 'MOSTRAR_PENDENTES',
        payload: {
            id: id,
            completa: false,
        }
    }
}

export function  mostrarCompletas (id, completa) {
    return {
        type: 'MOSTRAR_COMPLETAS',
        payload: {
            id: id,
            completa: false,
        }
    }
}

