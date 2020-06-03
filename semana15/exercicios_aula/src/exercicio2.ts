import * as moment from 'moment'
moment.locale('pt-br');

const date: moment.Moment = moment('28/07/2019 15:30', 'DD/MM/YYYY HH:mm');
console.log('Formato Inicial: ', date.format('DD/MM/YYYY HH:mm'));
console.log("Timestamp: ", date.unix());
console.log('Formato Americano: ', date.format('MM/DD/YYYY hh:mm[pm]'));
console.log('Frase: ', date.format('DD/MM/YYYY é dddd'));

