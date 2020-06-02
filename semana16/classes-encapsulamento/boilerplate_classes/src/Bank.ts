import {UserAccount} from './index'
import {JSONFileManager} from './JSONFileManager'

const balance: number = Number(process.argv[2])
const cpf: string = process.argv[3]
const name: string = process.argv[4]
const age: number = Number(process.argv[5])

export default class Bank {
    private accounts: UserAccount[] 
    private fileManager:JSONFileManager

    constructor (){
    this.accounts = []
   // this.fileManager = fileManager
    }
    
        public createAccount(account: UserAccount): void {

            if (newAccount.getAge() >= 18) {

                this.accounts.push(newAccount)

                const fileManager = new JSONFileManager("allAccounts.json")

                fileManager.writeObjectToFile(this.accounts)
                console.log("Conta criada com sucesso")
            } else {
                console.log("Você não tem idade o suficiente para abrir conta")
            }
        }
    //public getAllAccounts(): UserAccount[]                                                                                                 
    //public getAccountByCpf(): UserAccount
}


const newAccount = new UserAccount(balance, cpf, name, age )

const newBank: Bank = new Bank()
console.log(newBank.createAccount(newAccount))