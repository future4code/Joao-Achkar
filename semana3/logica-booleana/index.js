
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
//const fahrenheit = 77   //queria saber usar o valor como 0 e chamar "console.log fahrenheit+77 + ..." tem como?
//const kelvin = (fahrenheit - 32)*5/9 + 273.15
//console.log(fahrenheit + 'ºF = ' + kelvin + 'K')
//b. 
//const celsius = 80
//const fahrenheitParaCelsius = (celsius)*9/5 + 32
//console.log(celsius + 'ºC = ' + fahrenheitParaCelsius + 'ºF')
//c. e d.
//const celsiusParaFeK = Number(prompt("Insira o valor na escala Celsius que deseja converter"))
//const fahrenheitParaCelsius2 = (celsiusParaFeK)*9/5 + 32
//const kelvin2 = 273.15 + celsiusParaFeK 
//console.log(celsiusParaFeK + 'ºC = ' + fahrenheitParaCelsius2 + 'ºF' + ' e ' + kelvin2 + 'K')

//2. 
// const endereco = prompt("Qual o seu endereço?")
// console.log('1. Qual o seu endereço?')
// console.log('Resposta: ' + endereco)//
// const corFav = prompt("Qual a sua cor favorita?")
// console.log('2. Qual a sua cor favorita?')
// console.log('Resposta: ' + corFav)//
// const estadoCivil = prompt("Qual seu estado civil?")
// console.log('2. Qual seu estado civil?')
// console.log('Resposta: ' + estadoCivil)//
// const animalDomestico = prompt("Você possui animais em casa? Se sim, quais?")
// console.log('2. Você possui animais em casa?')
// console.log('Resposta: ' + animalDomestico)//
// const arrozFeijao = prompt("No prato, você coloca o feijão ao lado, ou por cima do arroz?")
// console.log('2. No prato, você coloca o feijão ao lado, ou por cima do arroz?')
// console.log('Resposta: ' + arrozFeijao) //fiquei na dúvida depois, como eu faço para que a resposta inserida no prompt seja considerada string ou number? Tem como?

//3. 
// const quilowattHora = prompt("Quantidade de Quilowatts consumida por hora")
// const valorDesconto = prompt("Valor do desconto para o baixo consumo")

//a.
// const valorConta = 0.05*quilowattHora
// console.log("Valor da conta para o consumo de " + quilowattHora + "Kw/hora:")
// console.log("R$" + valorConta )

//b.
// console.log("Valor da conta com desconto de " + valorDesconto + "% por baixo consumo:")
// console.log("R$" + (valorConta-(valorConta*valorDesconto/100)) )

//Desafios 

//1.
//a.
//const libra = 20
//const quiloGrama = libra/2.205
//console.log(libra + "lb equivalem a " + quiloGrama + " kg")

//b.
//const oncaOz = 10.5
//const quiloGrama = oncaOz/35.274
//console.log(oncaOz + "oz equivalem a " + quiloGrama + " kg")

//c.
//const milha = 100
//const metro = milha*1609
//console.log(milha + "mi equivalem a " + metro + " m")

//d.
// const pesFt = 50
// const metro = pesFt/3.281
// console.log(pesFt + "ft equivalem a " + metro + " m")

//g.
//const pesFt = Number(prompt("Insira o valor de pés (ft) que deseja converter para Metro"))
//const metro = pesFt/3.281
//console.log(pesFt + "ft equivalem a " + metro + " m")


