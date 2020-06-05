import {Missao} from "./Missao"
import {Docente} from "./docente"
import {Estudante} from "./Estudante"

export class MissaoNoturna extends Missao {
    constructor (
        nomeMissao: string = "",
        idDaTurma: string,
        dataDeInicio: moment.Moment,
        dataDeTermino: moment.Moment,
        listaDeDocente: Docente[] = [],
        listaDeEstudantes: Estudante[] = [],
        moduloAtual: number | undefined = undefined
        ){
           super ( 
                nomeMissao,
                idDaTurma, 
                dataDeInicio, 
                dataDeTermino,
                listaDeDocente,
                listaDeEstudantes,
                moduloAtual
                )
        }
    public setName(name:string){
        if (name.indexOf("-na-night") !== -1) {
            super.setNomeDaTurma(name);
            }
    }
}