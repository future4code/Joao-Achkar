//Exercício 1

 let num1: number = 15
 let num2: number = 33

//soma
function sum (num1: number, num2: number):number {
        return num1 + num2
    }
//subtração
function sub (num1: number, num2: number):number {
    return num1 - num2
}
//multiplicação 
function mult (num1: number, num2: number):number {
    return num1*num2
}
//maior número
function maior (num1: number, num2: number):number {
    return num1 > num2 ? num1 : num2;
}

console.log("Soma: " + sum(3, 4));
console.log("Subtração: " + sub(3, 4));
console.log("Multiplicação: " + mult(num1, num2));
console.log("Maior: " + maior(num1, num2));

//Exercício 2
type resultObject = {
    arrayLength: number,
    arrayOdd: number,
    arraySum: number 
}
const arr: number[] = [12, 34, 23, 65, 18, 25, 7]

function generateObject (arr: number[]):resultObject {
    let sum: number = 0;
    let odd: number = 0;
    for (const eachIndex of arr) {
        sum = sum + eachIndex;
        (eachIndex % 2) !== 0? odd++ : false;
    }
    return {
        arrayLength: arr.length,
        arrayOdd: odd,
        arraySum: sum
    }
}
console.log(generateObject (arr))

//Exercício 3
//a)
type post = {
    author: string,
    text: string
}
const arrayPosts: post[] = [
    {
        author: "joaopfa",
        text: "Fala leitores! Hoje o dia foi show"
    },
    {
        author: "paulinha",
        text: "Fala leitores! Hoje o dia foi topper"
    },
    {
        author: "amanda",
        text: "Fala leitoras! Hoje o dia foi labenu"
    },
    {
        author: "goli",
        text: "Fala leitoras! Hoje o dia foi louco"
    },
    {
        author: "joaopfa",
        text: "Fala leitoras! Hoje o dia foi foda"
    },

]
//b)
function allThePosts (postsArray: post[], authorName: string): post[] {
    return postsArray.filter(post => {
        return post.author === authorName 
    })
}
console.log(allThePosts(arrayPosts, "joaopfa"))

//Exercício 4

const ano:number = 1533
let sigla:string = "DC"
sigla = sigla.toUpperCase()
console.log(retornaIdade(ano,sigla))
function retornaIdade(ano:number,sigla:string):string {
    if((sigla==="AC")&&(ano<=100000)&&(ano>4000)){
        return "Pré-história"
    }
    else if((sigla==="AC")&&(ano<=4000)){
        return "Idade antiga"
    }
    else if (((sigla==="DC")||(sigla===""))&&(ano<=476)){
        return "Idade antiga"
    }
    else if (((sigla==="DC")||(sigla===""))&&(ano<=476)){
        return "Idade antiga"
    }
    else if (((sigla==="DC")||(sigla===""))&&(ano<=1453)){
        return "Idade média"
    }
    else if (((sigla==="DC")||(sigla===""))&&(ano<=1789)){
        return "Idade moderna"
    }
    else if (((sigla==="DC")||(sigla===""))&&(ano<=2020)){
        return "Idade Contemporânea"
    }
    else{
        return "Erro"
    }
}

