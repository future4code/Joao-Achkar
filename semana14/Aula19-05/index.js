"use strict";
exports.__esModule = true;
var myName = process.argv[2];
var age = Number(process.argv[3]);
console.log('Olá', myName, 'seja bem vindo(a)');
if (age >= 18) {
    console.log('Vc é maior de idade');
}
else {
    console.log('vc é menor de idade');
}
