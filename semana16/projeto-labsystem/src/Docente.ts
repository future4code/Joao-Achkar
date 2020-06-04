import { Usuarisson } from "./Usuarisson";

enum especialidades {
    REACT = "React", 
    REDUX = "Redux",
    CSS = "Css",
    TESTES = "Testes",
    TYPESCRIPT = "Typescript",
    POO = "Poo",
    BACKEND = "Backend"
}

export class Docente implements Usuarisson {
    id: string;
    name: string;
    email: string;
    dataNascimento: moment.Moment
}