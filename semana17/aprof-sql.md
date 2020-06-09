### Exercício 1
a) ALTER TABLE Actor DROP COLUMN salary;
Esse comando remove a coluna salário da tabela Actor

b) ALTER TABLE Actors CHANGE gender sex VARCHAR(6);
Esse comando vai alterar o nome da coluna "gender" pra "sex" e setando para que essa coluna aceite apenas strings de até 6 caracteres como valor

c) ALTER TABLE Actors CHANGE gender gender VARCHAR(255);
Esse comando vai alterar o nome da coluna "gender" pra "gender" e setando para que essa coluna aceite apenas strings de até 255 caracteres como valor

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2

a)UPDATE Actor SET name = "Pedro Cardoso", birth_date = "1970-03-04" WHERE id = "003"

b)UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes"
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PÃES"

c)UPDATE Actor SET name = "Fernanda Paes Leme", salary = 1300000, gender = "mulher", birth_date = "1988-03-12" WHERE id = "005"

d)UPDATE Actor SET name = "Fernanda Paes Leme", salary = 1300000, gender = "mulher", birth_date = "1988-03-12" WHERE id = "055"
O comando rodou ok, porém não retornou nada na tabela.

### Exercício 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### Exercício 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor; 

### Exercício 5

a) A última query (SELECT COUNT(*), gender FROM Actor GROUP BY gender)
retorna uma contagem do número de atores e atrizes de cada gênero

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

### Exercício 6

a) ALTER TABLE Movie ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE rating rating FLOAT;

c) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";

d) DELETE FROM Movie WHERE id = "001";
UPDATE Movie SET synopsis = "Esse filme é cabuloso" WHERE id = "001";

O filme foi deletado mesmo, mas o ID parece permanecer como um ID fantasma, abstrato. 

### Exercício 7

a) SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

b) SELECT AVG(rating) FROM Movie;

c) SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

d) SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();

e) SELECT MAX(rating) FROM Movie;

f) SELECT MIN(rating) FROM Movie;

### Exercício 8

a) SELECT * FROM Movie ORDER BY name;

b) SELECT * FROM Movie ORDER BY name DESC LIMIT 3;

c) SELECT * FROM Movie WHERE premiere_date < CURDATE() ORDER BY premiere_date DESC LIMIT 3;

d) SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;