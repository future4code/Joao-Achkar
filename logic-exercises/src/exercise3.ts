//a) Faça uma função que receba duas strings e devolva se elas são iguais, 
//considerando se os caracteres estão em maiúsculo ou minúsculo. Ex.: deve
//retornar true para as entradas escola e escola; mas retornar false para escola e Escola

function verifyStrings(stringOne: string, stringTwo: string):boolean {

    if (stringOne === stringTwo) {
        return true
    } else {
        return false
    }
}
console.log(verifyStrings("rabanete", "Rabanete"))

//a) Faça uma função que receba duas strings e devolva se elas são iguais, 
//ignorando se os caracteres estão em maiúsculo ou minúsculo. Ex.: deve 
//retornar true para as entradas escola e Escola ou escola e EsCoLA

function verifyStringsNoMatterCase(stringOne: string, stringTwo: string):boolean {

    if (stringOne.toLocaleLowerCase() === stringTwo.toLocaleLowerCase()) {
        return true
    } else {
        return false
    }
}
console.log(verifyStringsNoMatterCase("rabanete", "Rabanete"))