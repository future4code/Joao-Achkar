import { Docente } from "./docente";
import { Estudante } from "./Estudante";

export abstract class Missao {
    private nomeMissao: string = "";
    
    constructor(
        private idDaTurma: string,
        private dataDeInicio: moment.Moment,
        private dataDeTermino: moment.Moment,
        private listaDeDocente: Docente[],
        private listaDeEstudantes: Estudante[],
        private moduloAtual ?: number = undefined
    ){
        this.idDaTurma = idDaTurma, 
        this.dataDeInicio = dataDeInicio,
        this.dataDeTermino = dataDeTermino
        this.moduloAtual = moduloAtual
    }
    public getIdDaTurma(): string {
        return this.idDaTurma;
      }
    
      public getNomeDaTurma(): string {
        return this.nomeMissao;
      }
    
      public getDataDeInicio(): moment.Moment {
        return this.dataDeInicio;
      }
    
      public getDataDeTermino(): moment.Moment {
        return this.dataDeTermino;
      }
    
      public getModuloAtual(): number | undefined {
        return this.moduloAtual;
      }
    
      public addDocente(docente: Docente) {
        this.listaDeDocente.push(docente);
      }
    
      public addEstudante(estudante: Estudante) {
        this.listaDeEstudantes.push(estudante);
      }
    
      public setNomeDaTurma(nomeMissao: string) {
        this.nomeMissao = nomeMissao;
      }
}
