
//Exercícios de interpretaçao de código
//1.

// console.log("a. ", resultado) vai imprimir 
//a. false

//console.log("b. ", resultado) vai imprimir
//b. false

//console.log("c. ", resultado) vai imprimir
//c. true

//console.log("d. ", resultado) vai imprimir
//d. false

//console.log("e. ", typeof resultado) vai imprimir
//e. boolean

//2.
//a. Um array é uma forma de variável que permite guardar mais de
// uma informação ao mesmo tempo. Ele é declarado em JS da seguinte forma:
// let/const/var nomeDaVariavel = ["numeros", 34, "textos"]

//b. O index incial de um array é o '0' ou, [0]

//c. utilizando o comando .length através do console.log: 
//console.log(variavelArray.lenght)

//d. I.  undefined
//II.  null
//III.  11
//IV.  3  e  4
//V.  19  e  9
//VI.  3
//VII. 1

// let array
// console.log('I. ', array)

// array = null
// console.log('II. ', array)


// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('III. ', array.length)

// let i = 0
// console.log('IV. ', array[i], " e ", array[i+1])

// array[i+1] = 19
// const valor = array[i+6]
// console.log('V. ', array[i+1], " e ", valor)

// i+=1
// array[i] = array[i-1]
// console.log('VI. ', array[i])

// i = array.length - 1
// array[i] = array[i-3]
// const resultadoC = array[i]%array[1]
// console.log('VII. ', resultadoC)

//exercícios de escrita de código
//1. a.
const fahrenheit = 77   //queria saber usar o valor como 0 e chamar "console.log fahrenheit+77 + ..." tem como?
const kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log(fahrenheit + 'ºF = ' + kelvin + 'K')
//b. 
let celsius = 80
const fahrenheitParaCelsius = (celsius)*9/5 + 32
console.log(celsius + 'ºC = ' + fahrenheitParaCelsius + 'ºF')

