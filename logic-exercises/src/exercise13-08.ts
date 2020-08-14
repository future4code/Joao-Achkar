/*Escreva uma função que recebe uma matriz (um array de arrays) 
que está ordenada em ordem decrescente tanto na linha quanto na 
coluna, e retorna quantos números negativos tem nessa matriz.

Exemplo 1:
Input: [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explicação: Existem 8 números negativos na matriz.*/

function negativeNumbers(array: Array<Array<number>>){
    let arrayNegative = 0
    let qtd = array.length;
      for(let i = 0; i < array.length; i++) {
        const arrayInterno = array[i]
        for(let j = 0; j < arrayInterno.length; j++) {
         if(arrayInterno[j] < 0){
           arrayNegative = arrayNegative + 1
         }   
        } 
      }  
      return arrayNegative
    }
  console.log(negativeNumbers([[1,-1],[-9,-7], [-3, -5, 9, 0]]));