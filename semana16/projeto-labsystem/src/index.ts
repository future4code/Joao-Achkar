import { Estudante } from "./Estudante";
import { Docente } from "./docente";
import { MissaoNoturna } from "./MissaNoturna"
import * as moment from "moment"
import { ESPECIALIDADES } from './docente'
import { MissaoTempoIntegral } from "./MissaoTempoIntegral";

//Estudante
const novoAluno: Estudante = new Estudante (
    "2423", 
    "Marcio", 
    "marcio@marciao.com",
    moment("15/06/1995", "DD/MM/YYYY"),
    ["fazer bolo", "costurar"]
    )
    console.log(novoAluno)
const novoAlunoDois: Estudante = new Estudante (
    "2424", 
    "Márcia Araújo", 
    "marcia@araujo.com",
    moment("19/06/1992", "DD/MM/YYYY"),
    ["lutar boxe", "cozinhar"]
    )


//Professor 
const novoDocente: Docente = new Docente (
    "3242",
    "Marcia Relva",
    "marcia@marcia.com",
    moment("25/02/1990", "DD/MM/YYYY"),
    [ESPECIALIDADES.CSS, ESPECIALIDADES.BACKEND]
)
console.log(novoDocente)
const novoDocenteDois: Docente = new Docente (
    "3243",
    "Golinho",
    "goli@doly.com",
    moment("12/11/1993", "DD/MM/YYYY"),
    [ESPECIALIDADES.TYPESCRIPT, ESPECIALIDADES.POO]
)

//MissaoNoturna
const novaTurmaIntegral: MissaoTempoIntegral = new MissaoTempoIntegral (
    "Missao Libertadores",
    "1323",
    moment("08/08/2020", "DD/MM/YYYY"),
    moment("10/12/2020", "DD/MM/YYYY"),
    [novoDocente, novoDocenteDois],
    [novoAluno, novoAlunoDois],
    3
)
console.log(novaTurmaIntegral)