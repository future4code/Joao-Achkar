import { Docente } from "./docente";
import { Estudante } from "./Estudante";

export abstract class Missao {
    private nomeMissao: string = "";
    
    constructor(
        private idDaTurma: string,
        private nomeDaTurma: string,
        private dataDeInicio: moment.Moment,
        private dataDeTermino: moment.Moment,
        private listaDeDocente: Docente[],
        private listaDeEstudantes: Estudante[],
        private moduloAtual ?: number = undefined
    ){
        this.idDaTurma = idDaTurma, 
        this.nomeDaTurma = nomeDaTurma,
        this.dataDeInicio = dataDeInicio,
        this.dataDeTermino = dataDeTermino
        this.moduloAtual = moduloAtual
    }
    public getIdDaTurma(): string {
        return this.idDaTurma;
      }
    
      public getNomeDaTurma(name: string): string {
        return this.nomeDaTurma;
      }
    
      public getDataDeInicio(): moment.Moment {
        return this.dataDeInicio;
      }
    
      public getDataDeTermino(): moment.Moment {
        return this.dataDeTermino;
      }
    
      public getListaDeDocente(): number | undefined {
        return this.listaDeDocente;
      }
    
      public addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
      }
    
      public addStudent(student: Student) {
        this.students.push(student);
      }
    
      public setName(name: string) {
        this.name = name;
      }
}
