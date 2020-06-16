## Exercício 1
### a)  Explique o que é uma chave estrangeira
``` 
Chave estrangeira é um valor de referência de uma coluna de outra tabela.
```
### c)Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hamilton_joao_achkar`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
A query não funcionou pq a foreign key era inexistente. Falhou ao buscar a foreign key
```

### d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
ALTER TABLE Movie DROP COLUMN rating;

### e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
DELETE FROM Movie WHERE id = "002"; 
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hamilton_joao_achkar`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Não é possível deletar o filme pq uma outra tabela depende de um dado dessa linha que tentamos deletar. 
```


## Exercício 2
### a)  Explique, com as suas palavras, essa tabela
Essa tabela é uma nova tabela que tem as colunas movie_id e actor_id, e essas colunas vão receber como valores as chaves das colunas id das tabelas Movie e Actor, que são tabelas externas.

### b) Crie, ao menos, 6 relações nessa tabela 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
)

### c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hamilton_joao_achkar`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Fica impossível criar essa relação quando uma foreign key inexiste. A linha da tabela 'filha' não consegue atualizar se não o dado na tabela pai. Ocorre uma falha da constraint(restrição)

### d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hamilton_joao_achkar`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
O erro diz que não é possível deletar ou atualizar uma linha da tabela 'pai', a tabela que possue um dado primário que é utilizado na tabela filha.


## Exercício 3

### a) Explique, com suas palavras, a query acima. O que é o operador ON?
```
Ao juntar os registros de duas tabelas, o Join recebe a condição ON, que indica sob qual condição 
as tabelas deve ser retornadas, para q n sejam retornados dados muito aleatórios e sem sentido
```
### b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
```
SELECT m.id as id_do_filme, r.rate as avaliação FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```

## Exercício 4
### a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário
```
SELECT m.id as id_do_filme, m.name, r.rate as avaliação, r.comment as comentário FROM Movie m LEFT JOIN Rating r ON m.id = r.movie_id;
```

### b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator
SELECT m.id as movie_id, m.name, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id; 

### c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)
SELECT AVG(r.rate), m.id as id_filme, m.name FROM Movie m JOIN Rating r ON m.id = r.movie_id GROUP BY (m.id);

## Exercício 5
### a) Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?

Porque o JOIN é o responsável pela conexão entre tabelas

### b) Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque alias para facilitar o endentimento do retorno da query
SELECT m.id, m.name, a.id as id_ator, a.name FROM Movie m LEFT JOIN MovieCast mc ON m.id = mc.movie_id JOIN Actor a ON a.id = mc.actor_id;

### c) A query abaixo deveria ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.
Retornou tabela com id de cada filme e id de cada ator que atuou em cada filme
Não entendi como a MovieCast atuou ali

## Exercício 6

### b)