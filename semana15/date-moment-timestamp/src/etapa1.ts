import * as moment from 'moment'

type event = { name: string, description: string, date: string }

let arrInfo: any = []

function createEvents(
    name: string, description: string, date: Date
): void {
    if (name === "" || description === "" && (date < new Date())) {
        console.log("falta inserir detalhes do evento")
    }
    else {
        const newEvent: event = {name, description, date}
    arrInfo.push(newEvent)
    }
    console.log(arrInfo)
}

createEvents("Cicloficina de Rua", "Workshop de mecanica de bikes", "10-06-2020")
createEvents("Giro Rua", "pedal aberto pra geral", "10-06-2020")