import Transaction from './Transaction'
import { userInfo } from 'os'
export class UserAccount {
    //atributos
    private balance: number = 0
    private cpf: string
    private name: string
    private age: number
    private transactions: Transaction[]
    //métodos

    constructor (
        balance: number, 
        cpf: string, 
        name: string, 
        age: number, 
        transactions: Transaction[]=[]) {
 
        this.balance = balance,
        this.cpf = cpf,
        this.name = name,
        this.age = age,
        this.transactions = transactions
    }
     public getBalance(): number {
     return this.balance 
     }
     public addBalance(valor: number): void {
         this.balance += valor
         console.log('Saldo atualizado com sucesso')
     }
     public getAge(): number {
         return this.age
     }
}
const account: UserAccount = new UserAccount (105, "434242245", "Joãozera", 45 )
console.log (account)

//1 - O construtor faz o papel de um pré-requisito para que sejam informados todos os atributos da classe,
// e chamamos ele através de uma const, criando um objeto instanciado.