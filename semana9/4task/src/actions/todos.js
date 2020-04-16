export const  addTarefa = texto => {
    return {
        type: 'ADD_TAREFA',
        payload: {
            texto
        }
    }
}

 export const  marcarTarefaComoCompleta = id => {
     return {
         type: 'MARCAR_TAREFA_COMO_COMPLETA',
         payload: {
             id
         }
     }
 }


// export function  deletarTarefa (id, completa) {
//     return {
//         type: 'DELETA_TAREFA',
//         payload: {
//             id: id,
//             completa: false,
//         }
//     }
// }

// export function  marcarTodasComoCompletas () {
//     return {
//         type: 'MARCAR_TODAS_COMO_COMPLETAS',
//       //n tem valor de payload pq como são todas n precisa identificar elas
//     }
// }

// export function  limparCompletas () {
//     return {
//         type: 'LIMPAR_COMPLETAS',
//     }
// }

// export function  filtrar () {
//     return {
//         type: 'FILTRAR',
//         payload: {
//             filter
//         }
//     }
// }
