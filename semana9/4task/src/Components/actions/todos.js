export default function  adicionarTarefa (id, texto, completa) {
    return {
        type: 'ADD_TAREFA',
        payload: {
            id: id,
            texto: texto,
            completa: false,
        }
    }
}

export default function  marcarTodasComoCompletas (id, completa) {
    return {
        type: 'MARCAR_TODAS_COMO_COMPLETAS',
        payload: {
            id: id,
            completa: true,
        }
    }
}

export default function  mostrarTodas (id, completa) {
    return {
        type: 'MOSTRA_TODAS',
        payload: {
            id: id,
            completa: (true, false),
        }
    }
}

export default function  mostrarPendentes (id, completa) {
    return {
        type: 'MOSTRAR_PENDENTES',
        payload: {
            id: id,
            completa: false,
        }
    }
}

export default function  mostrarPendentes (id, completa) {
    return {
        type: 'MOSTRAR_PENDENTES',
        payload: {
            id: id,
            completa: false,
        }
    }
}

export default function  mostrarCompletas (id, completa) {
    return {
        type: 'MOSTRAR_COMPLETAS',
        payload: {
            id: id,
            completa: true,
        }
    }
}