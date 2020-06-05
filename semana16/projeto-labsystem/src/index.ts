import { Estudante } from "./Estudante";
import { Docente } from "./docente";
import { MissaoNoturna } from "./MissaNoturna"
import * as moment from "moment"
import { ESPECIALIDADES } from './docente'
import { MissaoTempoIntegral } from "./MissaoTempoIntegral";

//Estudantes
const novoAluno: Estudante = new Estudante (
    "2423", 
    "Marcio", 
    "marcio@marciao.com",
    moment("15/06/1995", "DD/MM/YYYY"),
    ["fazer bolo", "costurar"]
    )

const novoAlunoDois: Estudante = new Estudante (
    "2424", 
    "Márcia Araújo", 
    "marcia@araujo.com",
    moment("19/06/1992", "DD/MM/YYYY"),
    ["lutar boxe", "cozinhar"]
    )

const novoAlunoTres: Estudante = new Estudante (
    "2425", 
    "Chaves", 
    "chaves@barril.com",
    moment("19/06/1972", "DD/MM/YYYY"),
    ["zas, ee, zas", "comer sanduiche de presunto"]
    )
const novoAlunoQuatro: Estudante = new Estudante (
    "2426", 
    "Chiquinha", 
    "chiquinha@madruga.com",
    moment("10/06/1999", "DD/MM/YYYY"),
    ["brincar de bola", "comer sanduiche de presunto"]
    )
const novoAlunoCinco: Estudante = new Estudante (
    "2427", 
    "Godinez", 
    "godinez@god.com",
    moment("29/10/1998", "DD/MM/YYYY"),
    ["lamber pirulito", "comer sanduiche de presunto"]
    )


//Professores
const novoDocente: Docente = new Docente (
    "3242",
    "Raimundo",
    "raimundo@correa.com",
    moment("25/02/1960", "DD/MM/YYYY"),
    [ESPECIALIDADES.CSS, 
    ESPECIALIDADES.BACKEND,
    ]
)
const novoDocenteDois: Docente = new Docente (
    "3243",
    "Golinho",
    "goli@doly.com",
    moment("12/11/1993", "DD/MM/YYYY"),
    [ESPECIALIDADES.TYPESCRIPT, ESPECIALIDADES.POO]
)
const novoDocenteTres: Docente = new Docente (
    "3244",
    "Girafales",
    "girafales@prof.com",
    moment("30/05/1973", "DD/MM/YYYY"),
    [ESPECIALIDADES.TESTES, ESPECIALIDADES.REACT]
)
const novoDocenteQuatro: Docente = new Docente (
    "3245",
    "Dona Palmira",
    "palmira@rangos.com",
    moment("14/09/1952", "DD/MM/YYYY"),
    [ESPECIALIDADES.BACKEND, ESPECIALIDADES.REDUX]
)


//Missao Integral
const novaTurmaIntegral: MissaoTempoIntegral = new MissaoTempoIntegral (
    "Missao Prof Raimundo",
    "1323",
    moment("08/08/2020", "DD/MM/YYYY"),
    moment("10/12/2020", "DD/MM/YYYY"),
    [novoDocente, novoDocenteDois],
    [novoAluno, novoAlunoDois],
    3
)
console.log(novaTurmaIntegral)

//Missão Noturna
const novaTurmaNoturna: MissaoNoturna = new MissaoNoturna (
    "Missão Prof Girafales",
    "1324",
    moment("02/02/2019", "DD/MM/YYYY"),
    moment("02/08/2019", "DD/MM/YYYY"),
    [novoDocenteTres, novoDocenteQuatro],
    [novoAluno, novoAlunoTres],
    7
)
console.log(novaTurmaNoturna.getNomeDaTurma())

novaTurmaIntegral.addDocente(novoDocenteDois)
novaTurmaIntegral.addEstudante(novoAluno)
novaTurmaIntegral.addEstudante(novoAlunoDois)
novaTurmaIntegral.addEstudante(novoAlunoTres)

//Ai, cansei um pouco. Vou entregar pela metade. 
//Ainda preciso entender muito do que eu fiz, rs