import {Seller} from "./Seller"

/*
1 - a) Não seria possível pq não há um método para password, e ela é private

b) Foi impressa uma vez ao instanciar um novo usuário

2 - a) Foi impressa uma vez
b) Foi impressa duas vezes, porque já estava instanciada na classe User

3 - a) Seria possível, estando nesta instância

6 - a) Foi impressa duas vezes,
b) Todos os dados foram impressos
*/

//8 - a) Passados os msms parâmetros da classe employee (classe pai)
const JoaoVendedor: Seller = new Seller ("23",
"joaopfa@bike.com",
"Joao Bike Mil Grau",
"joao123",
new Date("10/02/20"), 
1400)
//b)
console.log(JoaoVendedor)

//9 - 
JoaoVendedor.getSalesQuantity()
JoaoVendedor.setSalesQuantity(3000)
console.log(JoaoVendedor.getSalesQuantity())

//10 
console.log(JoaoVendedor.calculateTotalSalary())