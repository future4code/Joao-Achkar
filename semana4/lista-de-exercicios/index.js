/////////// INÍCIO EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ////////////////////

//1. O código em questão multiplica a quantidade de dólares inserida no parâmetro da função 
//(conversorDeMoeda(100)) pela cotação do dólar inserida no prompt, retornando a cifra em 
//R$ dessa conversão.  O console.log(meuDinheiro) vai imprimir no console, caso o valor inserido
//no prompt seja 5, e o parâmetro seja = 100:

// R$ 500


//2. O código em questão retorna o valor do montante de um dinheiro investido, para quatro tipos
//de fundos de investimento. Caso o parâmetro do fundo de investimento não seja um dos tipos de 
//investimentos que satisfaça a função, o código emite um alerta dizendo que o tipo de investimento
//informado é incorreto.
//Com  console.log(novoMontante)  e console.log(segundoMontante), será impresso no console: 

//  165
// "TIPO DE INVESTIMENTO INFORMADO INCORRETO"


//3. O código em questão percorre o array 'numeros' com a variável 'numero' assumindo cada valor
//do array, verificando se cada número do array é par. Quando um número do array é par, ele é 
//adicionado ao array1. Do contrário, ele é adicionado ao array 2. Portanto o código basicamente
//separa o array original em dois novos arrays, um com os números pares, e outro com os números
//ímpares do array original.
//Os console.log 's vão imprimir no console:

//console.log("Quantidade total de números", numeros.length) ---> 
//   Quantidade total de números14
//console.log(array1.length) ---> 6
//console.log(array2.length) ---> 8

//4. O código em questão percorre o array com um for of, que verifica qual o maior e menor número
//do array 'numeros'. 

//console.log (numero1) ---> 10
//console.log (numero2) ---> 1590

///////////// FIM EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ////////////////////


/////////// INÍCIO EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO ////////////////////

//1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

//Lista exemplo: const arrayOriginal = [23, 4, 45, 22, 76, 21, 19, 8]

//Maneira 1: Usando for each:  
/*
const arrayOriginal = [23, 4, 45, 22, 76, 21, 19, 8]
let number = 0
arrayOriginal.forEach (let i in arrayOriginal) {
} sei fazer isso não
*/

//Maneira 2: Usando for para percorrer e devolver o maior número em um array
/*const arrayOriginal = [23, 4, 45, 22, 76, 21, 19, 8]
let maior = arrayOriginal [0]

for (let i = 0; i < arrayOriginal.length; i++) {
    const elemento = arrayOriginal[i];

    if (elemento > maior) {
        maior = elemento
    }
}
console.log(maior)*/

//Maneira 3: Usando o for of para percorrer e devolver o menor número em um array
/*
const arrayOriginal = [23, 4, 45, 22, 76, 21, 19, 8]
let menor = Infinity
for (let num of arrayOriginal) {
    if(num < menor) {
        menor = num
    }
}
console.log(menor)
*/

//2. Para este exercício considere as seguintes variáveis:

// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2
// const booleano4 = !booleano3 

//Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

// a) booleano1 && booleano2 && !booleano4
// False

// b) (booleano1 && booleano2) || !booleano3
// False

// c) (booleano2 || booleano3) && (booleano4 || booleano1)
// False

// d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
//  True

// e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
// True


// 3. Você tem que escrever um código que, dado um número **N**, ele imprima (no `console`) os **N** 
// primeiros números pares (por exemplo, se **N** for 3, você deve imprimir 0, 2 e 4; se **N** for 5, deve 
// imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. 
// Dê uma olhada no código dele:

/*
const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
}
*/

//     Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.

//Este código não funciona, porque qualquer que seja o valor da const quantidadeDeNumerosPares, não há uma 
// condição que acresça o valor de i a cada loop. Não há um if/else
//Segue um código que funcione:
/*
const quantidadeDeNumerosPares = 4
let i = 0
    while(i < quantidadeDeNumerosPares*2) {
 if (i % 2 === 0) {
   console.log(i)
   i++
} else {
 i++
}
}
*/


//4. Vocês lembram de trigonometria? (Oh, não, trigonometria). Relaxem. O exercício é simples, mas mexe com isso. 
//Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los 
//dependendo do tamanho de seus lados. Se um triângulo possuir os três lados iguais, ele é chamado de 
//"Equilátero". Se possuir, dois (e somente 2) lados iguais, diz-se que ele é "Isósceles". Se os três lados 
//tiverem medidas diferentes, ele é "Escaleno". Faça uma função que receba como parâmetro os tamanhos dos 
//três lados do triângulo: a, b, c  e retorne se ele é equilátero, isósceles ou escaleno.
/*
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA === ladoB) && (ladoB !== ladoC) ) {
        return classificaTriangulo = "O trinângulo é Isóceles"       
    } else if ((ladoA === ladoB) && (ladoB === ladoC)) {
        return classificaTriangulo = "O triângulo é Equilátero"
    } else if ((ladoA !== ladoB) && (ladoB !== ladoC) && (ladoC !== ladoA)) {
        return classificaTriangulo = "O triângulo é Escaleno"
    }
    
}

console.log(classificaTriangulo(5, 5, 5))
*/

//5. Faça um programa que, dados dois números,
// i. indique qual é o maior,
// ii. determine se eles são divisíveis um pelo outro (use o operador %) e
// iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)
/*
compara(4, 20)
function compara (a, b) {
    let numeroMaior = a
    let numeroMenor = b
    if (a === b) {
        console.log("Os números " + a + " e " + b + " são iguais")
    } else { if (a > b) {
        console.log("O maior é " + a)
        numeroMaior = a
        numeroMenor = b
    } else {
        console.log("O maior é " + b)
        numeroMaior = b
        numeroMenor = a
    }     
}
divide(numeroMaior, numeroMenor)
}

function divide(numeroMaior, numeroMenor) {
    if (numeroMaior % numeroMenor === 0) {
        console.log(numeroMaior + " é divisível por " + numeroMenor)
    }
        if (numeroMenor % numeroMaior === 0) {
            console.log(numeroMenor + " é divisível por " + numeroMaior)
        } else {
            if (numeroMenor % numeroMaior !== 0) {
                console.log(numeroMenor + " não é divisível por " + numeroMaior)
            } 
                if (numeroMaior % numeroMenor !== 0) {
                console.log(numeroMaior + " não é divisível por " + numeroMenor)
                }
        }
        subtrai (numeroMaior, numeroMenor)
}

function subtrai (numeroMaior, numeroMenor) {
let diferenca = numeroMaior - numeroMenor 
console.log("A diferença entre eles é " + diferenca)
}

*/
///////////// FIM EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO ////////////////////

