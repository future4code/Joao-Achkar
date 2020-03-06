import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

console.log("Bem vindo ao jogo de Blackjack!")



if(confirm("Quer iniciar uma nova rodada?")) {
   let carta1User1 = comprarCarta()
   let carta2User1 = comprarCarta()
   let carta3User1 = comprarCarta()
   let carta1User2 = comprarCarta()
   let carta2User2 = comprarCarta()
   let user1 = (carta1User1.valor + carta2User1.valor)
   let user2 = (carta1User2.valor + carta2User2.valor)

 if (confirm("Suas cartas são " + carta1User1.texto + carta2User1.texto + ". A carta revelada do computador é " + carta1User2.texto + ". Deseja comprar mais uma carta?")) {
    
   
   confirm("Suas cartas são " + carta1User1.texto + carta2User1.texto + carta3User1.texto + ". A carta revelada do computador é " + carta1User2.texto + ". Deseja comprar mais uma carta?")
   let user1rodada2 = (carta1User1.valor + carta2User1.valor + carta3User1.valor)
   let user2rodada2 = (carta1User2.valor + carta2User2.valor)
   if (user1rodada2 > user2rodada2) {
      alert("Suas cartas são " + carta1User1.texto + carta2User1.texto + carta3User1.texto + ". Sua pontuação é " + (carta1User1.valor + carta2User1.valor + carta3User1.valor) + ". As cartas do computador são " + carta1User2.texto + carta2User2.texto + ". A pontuação do computador é " + (carta1User2.valor + carta2User2.valor) + ". O usuário ganhou!") 
   } else {
   alert("Suas cartas são " + carta1User1.texto + carta2User1.texto + ". Sua pontuação é " + (carta1User1.valor + carta2User1.valor) + ". As cartas do computador são " + carta1User2.texto + carta2User2.texto + ". A pontuação do computador é " + (carta1User2.valor + carta2User2.valor) + ". O computador ganhou!") 
}  

} else 
if (user1 === user2) {
   alert("Suas cartas são " + carta1User1.texto + carta2User1.texto + ". Sua pontuação é " + (carta1User1.valor + carta2User1.valor) + ". As cartas do computador são " + carta1User2.texto + carta2User2.texto + ". A pontuação do computador é " + (carta1User2.valor + carta2User2.valor) + ". O jogo deu empate!") 
    }
 else if (user1 > user2) {
             alert("Suas cartas são " + carta1User1.texto + carta2User1.texto + ". Sua pontuação é " + (carta1User1.valor + carta2User1.valor) + ". As cartas do computador são " + carta1User2.texto + carta2User2.texto + ". A pontuação do computador é " + (carta1User2.valor + carta2User2.valor) + ". O usuário ganhou!") 
      }else {
       alert("Suas cartas são " + carta1User1.texto + carta2User1.texto + ". Sua pontuação é " + (carta1User1.valor + carta2User1.valor) + ". As cartas do computador são " + carta1User2.texto + carta2User2.texto + ". A pontuação do computador é " + (carta1User2.valor + carta2User2.valor) + ". O computador ganhou!") 
  }  
}
 else {
	console.log("O jogo acabou!")
}




/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
