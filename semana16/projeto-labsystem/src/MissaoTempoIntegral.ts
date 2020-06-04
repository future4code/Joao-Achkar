import {Missao} from "./Missao"
import {Docente} from "./docente"
import {Estudante} from "./Estudante"

export class MissaoTempoIntegral extends Missao {
    constructor (
       nomeMissao: string = "",
       idDaTurma: string,
       dataDeInicio: moment.Moment,
       dataDeTermino: moment.Moment,
       listaDeDocente: Docente[] = [],
       listaDeEstudantes: Estudante[] = [],
       moduloAtual ?: number = undefined
    ){
        super ( 
            idDaTurma, 
            dataDeInicio, 
            dataDeTermino,
            listaDeDocente,
            listaDeEstudantes,
            moduloAtual
            )
    }
}