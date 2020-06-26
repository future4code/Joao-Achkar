import { Docente } from "./docente";
import { Estudante } from "./Estudante";
import { FileManager } from "./FileManager"

export abstract class Missao {
  
  constructor(
        private nomeMissao: string,
        private idDaTurma: string,
        private dataDeInicio: moment.Moment,
        private dataDeTermino: moment.Moment,
        private listaDeDocente: Docente[],
        private listaDeEstudantes: Estudante[],
        private moduloAtual: number | undefined = undefined
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
        if(this.moduloAtual) {
          return this.moduloAtual
        } else {
          return undefined;
        }
      }
      public getTodosDocentes(): Docente[] {
        const fileManager = new FileManager("Docentes.json")
        const docentes = fileManager.readFile()
        return docentes
      }
      public addDocente(novoDocente: Docente): void {
        const verificandoDocente = this.listaDeDocente.find ((docente) => {
          return novoDocente.id === docente.id
        })
        if (verificandoDocente) {
          console.log(`O Docente ${novoDocente.name} já existe`)
        } else {        
            this.listaDeDocente = this.getTodosDocentes()
            this.listaDeDocente.push(novoDocente);
            const fileManager = new FileManager("Docentes.json")
            const docentes = fileManager.writeFile(this.listaDeDocente)
        }
      }
      public getTodosEstudantes(): Estudante[] {
        const fileManager = new FileManager("Estudantes.json")
        console.log(this.listaDeEstudantes)
        const estudantes = fileManager.readFile()
        return estudantes
      }
      public addEstudante(novoEstudante: Estudante): void {
        const verificandoEstudante = this.listaDeEstudantes.find ((estudante: any) => {
          return novoEstudante.id === estudante.id
        })
        if (verificandoEstudante) {
          console.log(`O Estudante ${novoEstudante.name} já existe`)
        } else {
            try {
              this.listaDeEstudantes = this.getTodosEstudantes()
              this.listaDeEstudantes.push(novoEstudante)
              const fileManager = new FileManager("Estudantes.json")
              fileManager.writeFile(this.listaDeEstudantes)
            } catch (err) {
              console.error(err)
            }  
          }      
      }
    
      public setNomeDaTurma(nomeMissao: string) {
        this.nomeMissao = nomeMissao;
      }
}
