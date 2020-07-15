//Escreva uma função que receba uma string e determine 
//a sua reversa (com as letras de trás para frente). Para 
//a entrada escola, deve retornar alocse

function reverseString(string: string): string {
    return string.split("") 
    .reverse().join("");
    
}
console.log(reverseString("João Pedro"))