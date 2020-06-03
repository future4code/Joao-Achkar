import * as moment from 'moment'

moment.locale('pt-br');

const date1 = moment('20/10/2019', 'DD/MM/YYYY');
const date2 = moment('10/10/2010', 'DD/MM/YYYY');
const date3 = moment('31/12/2019', 'DD/MM/YYYY');
const date4 = moment('01/01/2019', 'DD/MM/YYYY');
const date5 = moment('19/08/2010', 'DD/MM/YYYY');
const date6 = moment('10/12/1994', 'DD/MM/YYYY');


function getInformation(firstDate: moment.Moment, secondDate: moment.Moment) {
  console.log('Diferença: ', firstDate.diff(secondDate, 'years'));
  console.log('Dia da sema data 1: ', firstDate.format('dddd'));
  console.log('Dia da sema data 2: ', secondDate.format('dddd'));
}

getInformation(date1, date2);
getInformation(date3, date4);
getInformation(date5, date6);

