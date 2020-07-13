//a) a. Faça uma função que receba uma string e identifique se ela só possui números. 
//Deve retornar false se possuir qualquer outro tipo de caracter; e true, se só possuir números.


function verifyNumberInString(string: string): boolean {
    const numbifyString: number = Number(string)
    console.log(numbifyString)
    if(isNaN(numbifyString)){
        return false
    }else {
        return true
    }
}

console.log(verifyNumberInString("123"))
console.log(verifyNumberInString("testando123"))



// function verifyNumberInString(string: string): boolean {
//     const stringSplitada = string.split("").map( Number );
// console.log(stringSplitada)
 

//      for (let i = 0; i<stringSplitada.length; i++) {
//          if(stringSplitada[i] !== NaN){
//              return true
//          } else {
//              return false
//          }
//      } 
// }

// console.log(verifyNumberInString("442g4"))