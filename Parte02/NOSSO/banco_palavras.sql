DROP TABLE IF EXISTS banco_palavras;

CREATE DATABASE banco_palavras;

USE banco_palavras;

CREATE TABLE palavras(
  palavra varchar(20) NOT NULL,
  dica varchar(255) NOT NULL,
  PRIMARY KEY  (palavra)
)


INSERT INTO palavras VALUES ('MACACO', 'Primata');
INSERT INTO palavras VALUES ('ELEFANTE', 'Animal grande e pesado');
INSERT INTO palavras VALUES ('GATO', 'Felino');
INSERT INTO palavras VALUES ('CACHORRO', 'Melhor amigo do homem');
INSERT INTO palavras VALUES ('COBRA', 'Kevin Durant');
INSERT INTO palavras VALUES ('BESOURO', 'Inseto que gruda no cabelo');
INSERT INTO palavras VALUES ('Sapo', 'Anfibio verde');
INSERT INTO palavras VALUES ('LEAO', 'Rei da selva');
INSERT INTO palavras VALUES ('ZEBRA', 'Possui listras');
INSERT INTO palavras VALUES ('PEIXE', 'Vive na água');
INSERT INTO palavras VALUES ('COELHO', 'Animal famoso durante a páscoa');
INSERT INTO palavras VALUES ('ARROZ', 'Branco');
INSERT INTO palavras VALUES ('LASANHA', 'Massa folhada assada em forno');
INSERT INTO palavras VALUES ('SALADA', 'Verde e consumida fria');
INSERT INTO palavras VALUES ('MIOJO', 'Todo universitário possui em casa');
INSERT INTO palavras VALUES ('BIFE', 'Pode ser frito ou assado');
INSERT INTO palavras VALUES ('LANCHE', 'MC Donalds, Subway, BK');
INSERT INTO palavras VALUES ('MACARRAO', 'Cozido em aprox 8 min, rico em carboidrato');
INSERT INTO palavras VALUES ('FEIJAO', 'Dá gases');
INSERT INTO palavras VALUES ('FUTEBOL', 'Esporte mais popular do mundo');
INSERT INTO palavras VALUES ('BASQUETE', 'Enterradas e crossover');
INSERT INTO palavras VALUES ('VOLEI', 'Saques e bloqueios');
INSERT INTO palavras VALUES ('TENIS', 'Raquete');
INSERT INTO palavras VALUES ('WINDOWS', 'Janelas');
INSERT INTO palavras VALUES ('LINUX', 'Distribuições');
INSERT INTO palavras VALUES ('ANDROID', 'Robozinho');
INSERT INTO palavras VALUES ('JAVA', '.lang');
INSERT INTO palavras VALUES ('PYTHON', 'Linguagem de programação');
INSERT INTO palavras VALUES ('APPLE', 'Empresa ostentação');
INSERT INTO palavras VALUES ('MICROSOFT', 'M$');
INSERT INTO palavras VALUES ('SPFC', 'Unico tri-mundial no Brasil');
INSERT INTO palavras VALUES ('CORINTHIANS', '2 mundiais e 1 libertadores');
INSERT INTO palavras VALUES ('PALMEIRAS', 'Não tem mundial');
INSERT INTO palavras VALUES ('SANTOS', 'Ninguém liga pra esse time');