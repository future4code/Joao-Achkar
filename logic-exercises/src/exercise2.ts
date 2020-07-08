//a) Faça uma função que receba uma string 
//e devolva um objeto com as informações: quantos 
//caracteres a string possui, qual seu primeiro 
//caracter e qual seu último caracter

function depurateString (string: string):object {
    const allCharacters = string.split("")
    const firstCharacter = allCharacters[0]
    const lastCharacter = allCharacters[string.length-1]

    return {
        characters: string.length,
         firstCharacter: firstCharacter,
         lastCharacter: lastCharacter
    }
}
console.log(depurateString("banana"))

//b) Faça uma função que receba uma string e devolva 
//um array com seus caracteres. Se o input for escola, 
//a saída deve ser [e, s, c, o, l, a]

function returnSplitedString(string: string) {
    return string.split("")
}
console.log(returnSplitedString("bananinha"))