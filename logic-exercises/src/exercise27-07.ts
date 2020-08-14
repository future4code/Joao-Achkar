// Durante a aula, iremos resolver os dois problemas abaixo. Tente resolvê-los sozinhos

// 1. Faça um programa que determine se uma string é um palíndromo
//bob
//joao
//
/** 
 export const checkPalindrom = (input: string): boolean => {
    let newInput = input.toLowerCase()
    while(newInput.indexOf(" ") !== -1) {
        newInput = newInput.replace(" ", "")
    }

    let reversedString = ""
    for(let i = input.length-1; i >= 0; i--) {
        reversedString += input[i]
    }

    return reversedString === input
}
console.log(checkPalindrom("bob"))
console.log(checkPalindrom("João"))
console.log(checkPalindrom("Socorram-me, subi no ônibus em Marrocos"))
 
*/


// 2. Faça um programa que receba duas strings e determine se uma é anagrama da outra
interface CountCharactersHash {
    [index: string]: number
}
const checkAnagram = (inputA: string, inputB: string): boolean => {
    if(inputA.length !== inputB.length) {
        return false
    }
    const hashForInputA: CountCharactersHash = {};
    for (const char of inputA) {
        if(hashForInputA[char]) {
            hashForInputA[char]++;
        } else {
            hashForInputA[char] = 1;
        }
    };
    const hashForInputB: CountCharactersHash = {};
    for (const char of inputA) {
        if(hashForInputB[char]) {
            hashForInputB[char]++;
        } else {
            hashForInputB[char] = 1;
        }
    }
    for (const key in hashForInputA) {
        if (hashForInputA[key] !== hashForInputB[key]) {
            return false;
        }
    }
    for (const key in hashForInputB) {
        if (hashForInputB[key] !== hashForInputA[key]) {
            return false;
        }
    }

    console.log("hashForInputA: ", hashForInputA);
    console.log("hashForInputB: ", hashForInputB);
    return true
}

checkAnagram("banana", "ananab");

