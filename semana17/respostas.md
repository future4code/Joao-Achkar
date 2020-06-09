### Exercício 1 

a) O comando VARCHAR(n) determina que o valor da chave será uma ```string``` de no máximo n caracteres
O comando DATE representa uma data
O comando PRIMARY KEY representa a chave única que cada item deve ter para ser identificado
NOT NULL significa que o campo não pode ficar em branco

b) O SHOW DATABASE retornou o banco de dados, a sua estrutura ( que eu não entendi nada)
O SHOW TABLE mostrou a tabela de atores. Até então, vazia

c) O DESCRIBE Actor retorna a estrutura(schema) da tabela
SHOW Actor deu erro.

### Exercício 2  
a) Criado

b) Deu erro pq o id era o mesmo da glória pires "002". E como ele é um key primary, não aceitou criar um item duplicado

c) "Error Code: 1136. Column count doesn't match value count at row 1" 
O erro diz que a contagem de colunas não corresponde aos valores na linha. Faltaram valores nos parâmetros)

d)" Error Code: 1364. Field 'name' doesn't have a default value"
Deu erro pq o campo de nome não foi preenchido

e)"Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1"
Deu erro pq o campo de data foi inserido sem aspas o envolvendo, e aí acaba sendo feita uma operação matemática

### Exercício 3
a) SELECT * FROM Actor WHERE gender = "female" ;

b) SELECT salary FROM Actor WHERE name = "Tony Ramos";

c) SELECT salary FROM Actor WHERE gender = "invalid";
retornou um total de 0 (zero) linhas da tabela onde o gênero é = "invalid", ou seja, nenhuma linha, pois todos os gêneros foram setados como male ou female

d) SELECT id, name, salary FROM Actor WHERE salary <= 500000

e) SELECT id, nome from Actor WHERE id = "002"
SELECT id, name from Actor WHERE id = "002"

### Exercício 4
a) A query BETWEEN permite verificar se um valor se encontra entre dois valores de parâmetro.
A query NOT é usada para negar uma comparação de parâmetro
(eu sei o que faz mas não sei explicar direito  agora)

b) SELECT * from Actor WHERE name NOT LIKE "A%"  AND salary > 350000;

c) SELECT * from Actor WHERE name LIKE "%G%" OR name LIKE "%g%"

d) SELECT * from Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

### Exercício 5
a)
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    premiere_date DATE NOT NULL,
	rating INT NOT NULL
);

A query cria uma tabela com as colunas:
id: que recebe um valor string (que não se repete em nenhuma linha) que localiza essa linha da tabela
name: que recebe um valor string que é o nome do filme
synopsis: que recebe uma string ilimitada com a sinopse do filme
premiere_date: recebe uma data em formato string que é a data de lançamento
rating: recebe um valor number da nota do filme

b)INSERT INTO Movie (id, name, synopsis, premiere_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
INSERT INTO Movie (id, name, synopsis, premiere_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
INSERT INTO Movie (id, name, synopsis, premiere_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
INSERT INTO Movie (id, name, synopsis, premiere_date, rating)
VALUES(
  "004", 
  "Cidade de Deus",
  "Mostra a vida difícil na zona oeste do Rio",
  "2000-11-02", 
  9
);

### Exercício 6
a) SELECT id, name, rating FROM Movie WHERE id = "004";

b) SELECT * FROM Movie WHERE name LIKE "%eu%";

c) SELECT id, title, synopsis FROM Movie WHERE rating > 7;]

### Exercício 7
a) SELECT * FROM Movie WHERE name LIKE "%vida%";

b) SELECT * FROM Movie WHERE name LIKE "%vida%" OR synopsis LIKE "%vida%";

c) SELECT * FROM Movie WHERE premiere_date < "2020-08-06";

d) SELECT * FROM Movie WHERE premiere_date < "2020-08-06" AND (name LIKE "%dona%" OR synopsis LIKE "%dona%") AND rating > 7;