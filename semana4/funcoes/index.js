//////////////////////////////// FUNÇÕES ////////////////////////////////

/////////////EXERCÍCIO 1
/*
const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}
console.log(minhaFuncao(5))
*/

//a. Indique qual será o resultado da função caso ela seja chamada como 
//minhaFuncao(2)

//O resultado da função será undefined, pois o valor 2 para 'quantidade' 
//não satisfez as condições da função
//----------------------------------------------------------------------
//b. Indique qual será o resultado da função caso ela seja chamada como 
//minhaFuncao(5) 

//O resultado da função será : [0, 1, 0, 1, 2, 3]
//----------------------------------------------------------------------
//c. Indique qual será o resultado da função caso ela seja chamada como 
//minhaFuncao(8)

//O resultado da função será : [ 0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5 ]
//----------------------------------------------------------------------

//Exercício 2
/*
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
}

console.log(funcao(arrayDeNomes, "Darvas"));



console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));*/

//a. Explicite quais são as saídas impressas no console

//0
//2
//undefined


//----------------------------------------------------------------------
//b. O código funcionaria se a lista fosse um array de números 
//(ao invés de um array de string)  e o nome fosse um número, ao se 
//chamar a função? Justifique sua resposta.

//O código funcionaria perfeitamente se a lista fosse um array de números 
//e se 'nome' fosse um número, pois como a funçao tem um laço que compara 
//os seus dois parâmetros, enquanto eles forem ao mesmo tempo number ou string,
//eles serão comparáveis e o código vai rodar normal.
//----------------------------------------------------------------------

//Exercício 3

//O código abaixo mostra uma função que recebe um array e devolve outro array.
//Explique rapidamente o que ela faz e sugira um nome melhor para ela!
/*
function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }
*/
  //essa função percorre um array e pega cada elemento deste array e vai somando 
  //à variável resultadoA, e multiplicando pelo resultadoB, para no final entregar
  //um novo array com os resultados finais da função. Ela poderia se chamar 
  //function somaUmMultiplicaOutro
//----------------------------------------------------------------------

//Exercício 4 
//Escreva as funções explicadas abaixo:

//a. A função deve receber um número correspondente aos "anos humanos" que um 
//cachorro tem e calcular a "idade de cachorro" dele. Considere que 1 ano humano 
//equivale a 7 anos de cachorro

let idadeHumana = prompt("informe a idade humana")
let idadeCachorro = function(idadeHumana) {
    return idadeHumana*7  
}
console.log("Se um cachorro tem ", idadeHumana, " anos de vida, é como se ele tivesse ", (idadeCachorro), "anos de idade humana." )

/*


function conversorIdade(idadeHumana, idadeCachorro) {
    const idadeCachorro = (idadeHumana*7)
    return conversorIdade
}
console.log(conversorIdade(idadeHumana))*/
