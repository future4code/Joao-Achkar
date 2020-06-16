## Exercício 1 
### a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
Usando caracteres numéricos e alfabéticos tem menos chances de ids se colidirem.

## Exercício 2

### a) Explique o código acima com as suas palavras.

O código em questão adiciona na tabela userTableName uma linha com id, email e password. 

### b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
                CREATE TABLE UserTableName (
                    id VARCHAR(255) PRIMARY KEY,
                    email VARCHAR(255) NULL,
                    password VARCHAR(255) UNIQUE NOT NULL,