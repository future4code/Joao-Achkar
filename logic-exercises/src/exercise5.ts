// Escreva uma função que receba um horário expressado 
//em segundos e transforme-o para o formato: {hora}h 
//{minuto}m {segundo}s. Exemplos:,

function transformTime(seconds: number):string {
    const secondsToMin =  Math.floor(seconds / 60)
    const minstToSeconds = seconds - secondsToMin*60
    const minsToHours = Math.floor(secondsToMin/60)
    const hoursToMins = secondsToMin - minsToHours * 60

console.log(secondsToMin, minsToHours, secondsToMin, hoursToMins)

    return `${seconds} segundos equivalem a ${minsToHours} hora(s),
    ${hoursToMins} minuto(s) e ${minstToSeconds} segundo(s)`
}

console.log(transformTime(3698))



