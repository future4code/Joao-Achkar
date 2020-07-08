//a)  Faça uma função que receba um array de números e 
//devolva um objeto que contenha as informações: soma de todos os itens, 
//quantidade de itens e multiplicação de todos os itens

const arrayEx = [2, 4 ,3]

function Exercise1a(arrayDeNumber: number[]):object {
    let sum: number = 0
    let multiply: number = 1

    for (let i = 0; i<arrayDeNumber.length; i++){
        sum = arrayDeNumber[i] + sum

        multiply *= arrayDeNumber[i]
    }
    return {
        soma: sum, 
        quantidade: arrayDeNumber.length,
        multiplicacao: multiply
    }
}

//console.log(Exercise1a(arrayEx))

//b) Faça uma função que receba um array de números 
//e devolve um objeto que contenha as informações: maior número e menor número 

const arrayNumeros = [23, 12, 6, 9, 55, 31, 29, 30, 72, 32];
function revelaMaiorEMenor(array: number[]) {
  let numeroMenor = Infinity;
  let numeroMaior = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < numeroMenor) {
      numeroMenor = array[i];      
    }
    if (array[i] > numeroMaior) {
      numeroMaior = array[i];
    }
  } 
  return {maiorNumero: numeroMaior,
 menorNumero: numeroMenor
}
}
//console.log(revelaMaiorEMenor(arrayNumeros))