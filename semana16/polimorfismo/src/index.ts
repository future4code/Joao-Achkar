import {Client} from './Client'
import { Place } from './Place'
import { Commerce } from './Commerce';
import { Residence } from './Residence';
import { Industry } from './Industry';

//1 - a)
const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100, 
    calculateBill: () => {
        return 2;
    }
}
console.log(client)
console.log(client.calculateBill())
/* Conseguimos imprimir todas as propriedades */

//2
//const newPlace: Place = new Place ("30180120")
//a) o erro retornado foi: "Cannot create an instance of an abstract class."

//b) Devemos declarar a classe como não abstrata para criar instâncias a partir dela

//3
//1. Última resposta do exercício anterior
//2. Porque independente do tipo de cliente, todos os clientes terão o cep acessado
//3. Porque ela é uma classe muito genérica


const newCommerce: Commerce = new Commerce(3, "30150544") 
    console.log(`O cep do comércio é: ${newCommerce.getCep()}`)

const newResidence: Residence = new Residence(3, "30180120")
    console.log(`O cep da residência é: ${newResidence.getCep()}`)

const newIndustry: Industry = new Industry(12, "30150130")
    console.log(`O cep da fábrica é: ${newIndustry.getCep()}`)

//4
/*a) Essa classe possui as propriedades: name, registrationNumber,
consumedEnergy, cpf, residentsQuantity, cep
e os métodos: 
getCpf e calculateBill
    */

//5
/*a) As semelhanças entre ResidentialClient e CommercialClient  é que recebem a interface 
Client, além de serem netas da classe Place

//b) Essa classe recebe atributos de Commerce.
*/

//6
//a) A IndustrialClient deve ser filha da Industry, porque precisa do método
//getMachinesQuantity
//b) IndustrialClient implementa a interface client, porque ela é uma client
//c) Porque na aplicação não precisamos modificar nada no objeto. Por isso
//os métodos getter já são enough. 

//7 
