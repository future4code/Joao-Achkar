## Exercício 1
### a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
Round é o fator numérico do hash. Está associado à segurança da senha. Quanto maior é esse valor, maior é o tempo de execução, e maior a segurança da senha.
Usei o valor 12 para o round, por ser o padrão na maioria das libs. O Salt éo  input adicionado no processo de hashing.

## Exercício 2
### a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
Para realizar corretamente os testes, devo modificar primeiro a função de signup, por ser a parte do cadastro (criação do usuário) onde a senha é inserida. E é nesse momento que é possível que a senha passe pelo processo criptografia.

### d) No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique. 
Não, não precisamos modificar este endpoint, pois ele não denpende da senha contida em userData.password

