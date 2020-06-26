import { Usuarisson } from "./Usuarisson";

export enum ESPECIALIDADES {
    REACT = "React", 
    REDUX = "Redux",
    CSS = "Css",
    TESTES = "Testes",
    TYPESCRIPT = "Typescript",
    POO = "Poo",
    BACKEND = "Backend"
}

export class Docente implements Usuarisson {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public dataNascimento: moment.Moment,
        public specialities: ESPECIALIDADES[] = []
    ) {
    this.id
    this.name
    this.email
    this.dataNascimento
    this.specialities
    }

}