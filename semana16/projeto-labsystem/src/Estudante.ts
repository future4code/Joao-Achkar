import { Usuarisson } from "./Usuarisson";
import * as moment from "moment"
//import moment from "moment";

export class Estudante implements Usuarisson {
    public hobbies: string[]

    constructor (
    public id: string,
    public name: string,
    public email: string,
    public dataNascimento: moment.Moment,
    hobbies: string[]
    ){
        this.id = id
        this.name = name
        this.email = email
        this.dataNascimento = dataNascimento
        this.hobbies = hobbies
    }
    public getIdade(): number {
        const today = moment()
        const idade = today.diff(this.dataNascimento, "years")
        return idade
    }
}