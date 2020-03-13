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
}*/

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

///////////// FIM EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO ////////////////////

