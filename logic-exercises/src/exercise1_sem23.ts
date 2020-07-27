/* Considere que a gente só possa fazer três operações com string: 
adicionar um caractere a ele, remover um caractere dele ou substituir 
um caractere por outro. Dizemos que uma string é 'one edit' de outra 
se ela for o resultado da original a partir de UMA SÓ dessas operações. 
Escreva um método que determine se uma string é  'one edit' de outra. 

interface ResultOfOneEdit {
    [index: string]: number;
}

function checkIfOneEdit(inputA: string, inputB: string): boolean {
    if(inputA.toLowerCase() === inputB.toLowerCase()) {
        return false
    }
    if(inputA.length > inputB.length+1 || inputA.length < inputB.length-1) {
        return false
    }

    let communCharQuantity = 0;
    for(const char of inputB) {
        if (inputA.indexOf(char) !== -1) {
            communCharQuantity ++;
        }
    }
    return (
        communCharQuantity <= inputA.length + 1 &&
        communCharQuantity >= inputB.length - 1
    )
}

console.log(checkIfOneEdit("bicicleta", "bicicleta"))
console.log(checkIfOneEdit("picicleta", "bicicleta"))
console.log(checkIfOneEdit("bicicleta", "bicicletaa"))
*/
/*
Implemente um método que performe uma compressão de string usando 
a contagem dos caracteres repetidos em sequência. Caso o resultado 
final tamanho maior do que a string inicial, seu programa deve 
retornar a string inicial
*/

function compressString(inputA: string): string {
    const substrings: string[] = []
    let charCount = 0;
    let lastChar = inputA[0];

    for (let char of inputA) {
        if(char !== lastChar) {
            substrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }

    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
        result += key
    }
    return result.length >= inputA.length ? inputA : result;
}

console.log(compressString("banana"))
console.log(compressString("banaaaannnna"))