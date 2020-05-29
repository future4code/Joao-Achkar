// const now = new Date();
// console.log('Timestamp: ', now.getTime());
// console.log('Ano: ', now.getFullYear());
// console.log('Mês: ', now.getMonth());
// console.log('Hora: ', now.getHours());

import * as moment from 'moment'

// moment.locale('pt-br');
//
// const date: moment.Moment = moment.unix(1590624000);
// console.log(date);
// console.log(date.unix());

//Adicionando 1h

//1h = 60 min
//1min = 60s
//1s = 1000 ms
//1h = 60 * 60 * 1000
// const date1: Date = new Date();
// console.log(date1);
// const hoursInMilisseconds = 60 * 60 * 1000;
// const timestamp = date1.getTime();
// const date2 = new Date(timestamp + hoursInMilisseconds);
// console.log(date2);

//Contas com o moment
//
// const date1: moment.Moment = moment('01/11/2018', 'DD/MM/YYYY');
// console.log(date1);
// const date2: moment.Moment = date1.add(1, 'year');
// console.log(date2);

// Diferença com moment
const date1: moment.Moment = moment('01/11/2018', 'DD/MM/YYYY');
const date2:  moment.Moment = moment('01/10/2019', 'DD/MM/YYYY');

const diff = date1.diff(date2, 'months');
console.log(diff);








