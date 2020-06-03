import moment from 'moment';

//contas com timestamp
//somando horas 

// const date1: Date = new Date()
// const hoursInMillisseconds = 60 * 60 * 1000
// const date1Timestamp = date1.getTime()
// const date2: Date = new Date(date1Timestamp + hoursInMillisseconds)

// console.log(date1)
// console.log(date2)

// console.log(date1Timestamp)

//substraindo datas

// const date1: Date = new Date ("2018-11-01")
// const date2: Date = new Date ("2019-11-01")
// const diff = date2.getTime() - date1.getTime()
// console.log(date1)
// console.log(diff)

//contas com o moment

// const date1: moment.Moment = moment('01/07/2018', 'DD/MM/YYYY')

// const date2: moment.Moment = moment('01/04/2019', 'DD/MM/YYYY')

// const diff = date2.diff(date1, 'months')
// console.log(diff)

const today: moment.Moment = moment();            
console.log(today)
const diffDate = newEvent.dateStart.diff(today);
console.log(diffDate)

// moment.locale('pt-br')

// const now: moment.Moment = moment.unix(1590777755);

// console.log(now.unix())

//console.log(now.utcOffset('-0500').format('ddd-DD[th]/MMMM/YYYY hh:mm:ss'))

// const today: Date = new Date(1789, 6, 14)
// console.log(today.getTime())
// console.log(today.getFullYear())
// console.log(today.getMonth())
