import * as fs from 'fs';
type user = {
    name: string,
    cpf: number,
    birthDate: number,
    balance: number,
};

let accounts: any = []

const fileName: string = (process.argv[2])
const userName: string = (process.argv[3])
const cpf: number = Number(process.argv[4])
const birthDate: number = Number(process.argv[5])
const balance: number = Number(process.argv[6])

const account: user = {
    name: userName,
    cpf: cpf,
    birthDate: birthDate,
    balance: balance
}

function createAccount(newAccount: user): void {
try { 
    const data: Buffer = fs.readFileSync(fileName);
    accounts = JSON.parse(data.toString());
    accounts.push(account)
    fs.writeFileSync(fileName, JSON.stringify(accounts, null, 2));
    console.log("Conta criada com sucesso")
} catch (err) {
    console.error(err)
}
}

createAccount(account)

// type extractArray = {
//     value: number,
//     date: number,
//     description: string,
// }

