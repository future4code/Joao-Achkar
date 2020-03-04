
//Exercícios de interpretaçao de código
/*
1.
 console.log("a. ", resultado) vai imprimir 
a. false
console.log("b. ", resultado) vai imprimir
b. false
console.log("c. ", resultado) vai imprimir
c. true
console.log("d. ", resultado) vai imprimir
d. false
console.log("e. ", typeof resultado) vai imprimir
e. boolean
*/
////////////////////////////////////////////////////////
/*
2.
a. Um array é uma forma de variável que permite guardar mais de
 uma informação ao mesmo tempo. Ele é declarado em JS da seguinte forma:
 let/const/var nomeDaVariavel = ["numeros", 34, "textos"]
b. O index incial de um array é o '0' ou, [0]
c. utilizando o comando .length através do console.log: 
console.log(variavelArray.lenght)
d. I.  undefined
II.  null
III.  11
IV.  3  e  4
V.  19  e  9
VI.  3
VII. 1
 let array
 console.log('I. ', array)
 array = null
 console.log('II. ', array)
 array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 console.log('III. ', array.length)
 let i = 0
 console.log('IV. ', array[i], " e ", array[i+1])
 array[i+1] = 19
 const valor = array[i+6]
 console.log('V. ', array[i+1], " e ", valor)
 i+=1
 array[i] = array[i-1]
 console.log('VI. ', array[i])
 i = array.length - 1
 array[i] = array[i-3]
 const resultadoC = array[i]%array[1]
 console.log('VII. ', resultadoC)
 */
////////////////////////////////////////////////////////

//Exercícios de escrita de código

/*
1. a.
const fahrenheit = 77   //queria saber usar o valor como 0 e chamar "console.log fahrenheit+77 + ..." tem como?
const kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log(fahrenheit + 'ºF = ' + kelvin + 'K')
b. 
const celsius = 80
const fahrenheitParaCelsius = (celsius)*9/5 + 32
console.log(celsius + 'ºC = ' + fahrenheitParaCelsius + 'ºF')
c. e d.
const celsiusParaFeK = Number(prompt("Insira o valor na escala Celsius que deseja converter"))
const fahrenheitParaCelsius2 = (celsiusParaFeK)*9/5 + 32
const kelvin2 = 273.15 + celsiusParaFeK 
console.log(celsiusParaFeK + 'ºC = ' + fahrenheitParaCelsius2 + 'ºF' + ' e ' + kelvin2 + 'K')
*/
////////////////////////////////////////////////////////
/*
2. 
 const endereco = prompt("Qual o seu endereço?")
 console.log('1. Qual o seu endereço?')
 console.log('Resposta: ' + endereco)//
 const corFav = prompt("Qual a sua cor favorita?")
 console.log('2. Qual a sua cor favorita?')
 console.log('Resposta: ' + corFav)//
 const estadoCivil = prompt("Qual seu estado civil?")
 console.log('2. Qual seu estado civil?')
 console.log('Resposta: ' + estadoCivil)//
 const animalDomestico = prompt("Você possui animais em casa? Se sim, quais?")
 console.log('2. Você possui animais em casa?')
 console.log('Resposta: ' + animalDomestico)//
 const arrozFeijao = prompt("No prato, você coloca o feijão ao lado, ou por cima do arroz?")
 console.log('2. No prato, você coloca o feijão ao lado, ou por cima do arroz?')
 console.log('Resposta: ' + arrozFeijao) //fiquei na dúvida depois, como eu faço para que a resposta inserida no prompt seja considerada string ou number? Tem como?
*/
////////////////////////////////////////////////////////
/*
 3. 
 const quilowattHora = prompt("Quantidade de Quilowatts consumida por hora")
 const valorDesconto = prompt("Valor do desconto para o baixo consumo")
a.
 const valorConta = 0.05*quilowattHora
 console.log("Valor da conta para o consumo de " + quilowattHora + "Kw/hora:")
 console.log("R$" + valorConta )
b.
 console.log("Valor da conta com desconto de " + valorDesconto + "% por baixo consumo:")
 console.log("R$" + (valorConta-(valorConta*valorDesconto/100)) )
*/
////////////////////////////////////////////////////////
/*
 Desafios 
1.
a.
const libra = 20
const quiloGrama = libra/2.205
console.log(libra + "lb equivalem a " + quiloGrama + " kg")
b.
const oncaOz = 10.5
const quiloGrama = oncaOz/35.274
console.log(oncaOz + "oz equivalem a " + quiloGrama + " kg")
c.
const milha = 100
const metro = milha*1609
console.log(milha + "mi equivalem a " + metro + " m")
d.
 const pesFt = 50
 const metro = pesFt/3.281
 console.log(pesFt + "ft equivalem a " + metro + " m")
g.
const pesFt = Number(prompt("Insira o valor de pés (ft) que deseja converter para Metro"))
const metro = pesFt/3.281
console.log(pesFt + "ft equivalem a " + metro + " m")
*/
////////////////////////////////////////////////////////

//AULA 10 - C O N D I C I O N A I S

//EXERCÍCIO 1 

/* O código em questão realiza um teste de verificação se um numeral inserido
pelo usuário é divisível por 2 (par ou ímpar) . Para os números pares, ele imprime no console "Passou
no teste". Para os números ímpares, ele imprime "Não passou no teste".*/

//EXERCÍCIO 2
//a. 
/*
O código acima serve para etiquetar corretamente o preço 
das frutas do supermercado
*/ 
//b.
/*
O preço da fruta  Maçã  é  R$  2.25
*/
//c.
/*
2 laranjas = R$ 7,00
1 maçã = R$ 2,25
3 bananas = R$ 15,00 (default)
1 uva = R$ 0,30
-------------------
TOTAL: R$ 24,55
*/
//d.
/*
A mensagem impressa seria: "O preço da fruta  Pêra  é  R$  5", porque 
o console seguiria lendo o código para baixo, sobrescrevendo o valor da fruta
Pêra com o valor default"
*/

//EXERCÍCIO 3
/*
A mensagem do terminal será: 
index.js:178 Uncaught ReferenceError: mensagem is not defined
    at index.js:178
Ocorre um erro porque a variável "mensagem", que é requerida no console.log
da última linha, foi definida dentro do escopo do bloco if pai. O console.log
está fora da chave que delimita o bloco if pai, não podendo portanto, acessar
o valor da variável.
*/

//EXERCÍCIO 4

//a. Crie um programa que receba dois números do usuário através do prompt
// e imprima-os na ordem decrescente. O que acontece com o seu programa 
//se os 2 números forem iguais? (é só testar e colocar um comentário 
//descrevendo o que aconteceu)
/*
const numero1 = Number(prompt("Digite o primeiro número."))
const numero2 = Number(prompt("Digite o próximo número."))
if(numero1 > numero2) {
  console.log(numero1, numero2)
    } else {
 console.log(numero2, numero1)
    }*/
//Se os 2 números inseridos forem iguais, eles são imprimidos normalmente
// no console, um após o outro, por não satisfazerem nenhuma das condicionais

//b.  Adapte o programa para que o usuário digite 3 números. Ainda os 
//imprima na ordem decrescente. O que acontece com o seu programa se os 
//3 números forem iguais? (é só testar e colocar um comentário descrevendo
// o que aconteceu)

/*
let numero1 = Number(prompt("Digite o primeiro número."))
let numero2 = Number(prompt("Digite o próximo número."))
if(numero1 == numero2) {
    prompt("Digite ao menos um número diferente")} 
let numero3 = Number(prompt("Digite o próximo número."))

if ((numero3 >= numero2) && (numero2 >= numero1)) {
    console.log("ordem decrescente " + numero3 + "; " + numero2 + "; " + numero1)  
  } 
  else {
    if ((numero2 >= numero3) && (numero3 >= numero1)) {
    console.log("ordem decrescente " + numero2 + "; " + numero3 + "; " + numero1)  
} 
  else {
     if ((numero1 >= numero2) && (numero3 >= numero1)) {
  console.log("ordem decrescente " + numero3 + "; " + numero1 + "; " + numero2) 
}
  else {
    if ((numero2 >= numero1) && (numero1 >= numero3)) {
    console.log("ordem decrescente " + numero2 + "; " + numero1 + "; " + numero3)
  }
  else {
    if ((numero1 >= numero3) && (numero3 >= numero2)) {
    console.log("ordem decrescente " + numero1 + "; " + numero3 + "; " + numero2)  
  }
  else {
    if ((numero1 >= numero2) && (numero2 >= numero3)) {
        console.log("ordem decrescente " + numero1 + "; " + numero2 + "; " + numero3)  
      }
}
}
}
}
}
*/
 
// se os 3 números forem iguais, satisfazendo todas as condições do código, os 4 console.log
// imprimem seus resultados.

//c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um 
//aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente

//usei um 
/*if(numero1 == numero2) {
    prompt("Digite ao menos um número diferente")} 
    let numero3 = Number(prompt("Digite o próximo número."))*/
//entre o 2º e 3º prompt


//EXERCÍCIO 5
/*Vamos criar um programa que classifique os animais dados alguns critérios. O primeiro 
critério de divisão é se eles possuem ossos formando seu esqueleto ou não. Caso possuam, 
são vertebrados, caso contrário, invertebrados. O nosso foco é realizar a classificação 
só do primeiro caso. Se possuir pelos, entende-se que ele é um mamífero; e este pode ser 
classificado como um ser humano ou não (mamífero não humano), simplesmente, pelo fato dele 
ser considerado racional ou não. Se não for mamífero, entende-se que ele é uma ave, se 
possuir penas. Se não possuir, devemos entender uma característica importante: se ele é 
um animal terrestre. Se não for, diz-se que é um peixe; se  for, ele pode ser um anfíbio 
ou um réptil. Ele será o primeiro (anfíbio), se passar uma parte da vida em ambiente 
aquático; e será o segundo (réptil), caso contrário.

a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício. 
(Coloque a imagem do esquema no drive e gerem um link de compartilhamento público. Coloque  
este link num comentário durante a resolução deste exercício)
link da árvore condicional: https://drive.google.com/file/d/1FTHEj_aqth76MbC3bychGemwib9tm3No/view?usp=sharing

b. Escreva um programa que realize estas perguntas  e indique a classificação final considerada. As opções 
são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado
*/

/*
const esqueleto = prompt("O animal possuí um esqueleto? Use s/n para responder")
if(esqueleto !== "s") {
     console.log("É um invertebrado")
} else {
    const pelo = prompt("Nesse caso, é um mamífero. Possuí pêlo? Use s/n para responder")
  if (pelo === "s") {
        const racional = prompt("É racional? Use s/n para responder")
        if (racional === "s") {
            console.log("É um ser humano")
        } else {
            console.log("É mamífero não humano")
        } 
    } else { 
        const pena = prompt("Nesse caso, pode ser uma ave. Possuí pena? Use s/n para responder")
        if (pena === "s") {
            console.log("Neste caso, é uma ave")            
        } else {
            const terra = prompt("É um animal terrestre? Use s/n para responder")
            if (terra !== "s") {
                console.log("Neste caso, trata-se de um peixe")                
            } else {
                const vidaAqua = prompt("Pode ser um réptil ou um anfíbio. Passa parte da vida no ambiente aquático? Use s/n para responder")
                if (vidaAqua === "s") {
                    console.log("Neste caso, é um anfíbio")                    
                } else {
                    console.log("Neste caso, o animal é um réptil")
                }            
            }
        }
    }
}
*/

//DESAFIO
/*
const nomeComp = prompt("Insira seu nome completo:")
let tipoJogo = prompt("Qual o tipo de jogo que deseja assistir? \n Use IN para jogo Internacional e DO para jogo Doméstico")
let etapaJogo = prompt("Informe a etapa do jogo \nUse SF para semi-final \nDT para decisão terceiro lugar \nFI para jogo da final")
let categoria = prompt("Informe a categoria de arquibancada desejada usando \n 1 para azul \n 2 para verde \n 3 para vermelha \n 4 para roxa")
let qtdIng = Number(prompt("Informe em números a quantidade de ingressos"))
let valorIng = Number

if (tipoJogo === "IN") {
    tipoJogo = "Internacional"   
} else {
    tipoJogo = "Doméstico"
}
if (etapaJogo === "SF") {
    etapaJogo = "Semifinais da liga"
    if (etapaJogo === "DT") {
        etapaJogo = "Decisão 3º lugar da liga"
    }
} else {
    etapaJogo = "Final da liga"
}

// if (categoria === "1") {
//     let valorCat = 1320.00
// }
// if (categoria === "2") {
//     let valorCat = 880.00
// }
// if (categoria === "3") {
//     let valorCat = 550.00
// }

// } else {  
// }

if (tipoJogo ==="DO") {
    if ((categoria === "1") && (etapaJogo === "SF") && (tipoJogo === "DO") ){
    let valorIng       //ai, tava empolgado aqui no desafio, mas quando cheguei aqui ness problema, resolvi que era hora de para rs.
}
} 
else {
    
}


console.log("-----Dados da compra----- \nNome do cliente: " + nomeComp +  "\nTipo de jogo: " + tipoJogo + "\nEtapa do jogo: " + etapaJogo + "\nCategoria: " + categoria + "\nQuantidade de ingressos: "+ qtdIng + "\n----Valores----: \nValor do Ingresso: R$ "+ valorIng)
*/