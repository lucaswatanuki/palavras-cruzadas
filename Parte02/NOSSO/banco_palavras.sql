DROP TABLE IF EXISTS banco_palavras;

CREATE DATABASE banco_palavras;

USE banco_palavras;

CREATE TABLE palavras(
  palavra varchar(20) NOT NULL,
  dica varchar(255) NOT NULL,
  PRIMARY KEY  (palavra)
)


INSERT INTO palavras (palavra, dica) VALUES ('MACACO', 'Primata');
INSERT INTO palavras (palavra, dica) VALUES ('ELEFANTE', 'Animal grande e pesado');
INSERT INTO palavras (palavra, dica) VALUES ('GATO', 'Felino');
INSERT INTO palavras (palavra, dica) VALUES ('CACHORRO', 'Melhor amigo do homem');
INSERT INTO palavras (palavra, dica) VALUES ('COBRA', 'Kevin Durant');
INSERT INTO palavras (palavra, dica) VALUES ('BESOURO', 'Inseto que gruda no cabelo');
INSERT INTO palavras (palavra, dica) VALUES ('Sapo', 'Anfibio verde');
INSERT INTO palavras (palavra, dica) VALUES ('LEAO', 'Rei da selva');
INSERT INTO palavras (palavra, dica) VALUES ('ZEBRA', 'Possui listras');
INSERT INTO palavras (palavra, dica) VALUES ('PEIXE', 'Vive na água');
INSERT INTO palavras (palavra, dica) VALUES ('COELHO', 'Animal famoso durante a páscoa');
INSERT INTO palavras (palavra, dica) VALUES ('ARROZ', 'Branco');
INSERT INTO palavras (palavra, dica) VALUES ('LASANHA', 'Massa folhada assada em forno');
INSERT INTO palavras (palavra, dica) VALUES ('SALADA', 'Verde e consumida fria');
INSERT INTO palavras (palavra, dica) VALUES ('MIOJO', 'Todo universitário possui em casa');
INSERT INTO palavras (palavra, dica) VALUES ('BIFE', 'Pode ser frito ou assado');
INSERT INTO palavras (palavra, dica) VALUES ('LANCHE', 'MC Donalds, Subway, BK');
INSERT INTO palavras (palavra, dica) VALUES ('MACARRAO', 'Cozido em aprox 8 min, rico em carboidrato');
INSERT INTO palavras (palavra, dica) VALUES ('FEIJAO', 'Dá gases');
INSERT INTO palavras (palavra, dica) VALUES ('FUTEBOL', 'Esporte mais popular do mundo');
INSERT INTO palavras (palavra, dica) VALUES ('BASQUETE', 'Enterradas e crossover');
INSERT INTO palavras (palavra, dica) VALUES ('VOLEI', 'Saques e bloqueios');
INSERT INTO palavras (palavra, dica) VALUES ('TENIS', 'Raquete');
INSERT INTO palavras (palavra, dica) VALUES ('WINDOWS', 'Janelas');
INSERT INTO palavras (palavra, dica) VALUES ('LINUX', 'Distribuições');
INSERT INTO palavras (palavra, dica) VALUES ('ANDROID', 'Robozinho');
INSERT INTO palavras (palavra, dica) VALUES ('JAVA', '.lang');
INSERT INTO palavras (palavra, dica) VALUES ('PYTHON', 'Linguagem de programação');
INSERT INTO palavras (palavra, dica) VALUES ('APPLE', 'Empresa ostentação');
INSERT INTO palavras (palavra, dica) VALUES ('MICROSOFT', 'M$');
INSERT INTO palavras (palavra, dica) VALUES ('SPFC', 'Unico tri-mundial no Brasil');
INSERT INTO palavras (palavra, dica) VALUES ('CORINTHIANS', '2 mundiais e 1 libertadores');
INSERT INTO palavras (palavra, dica) VALUES ('PALMEIRAS', 'Não tem mundial');
INSERT INTO palavras (palavra, dica) VALUES ('SANTOS', 'Ninguém liga pra esse time');
INSERT INTO palavras (palavra, dica) VALUES ('FLAMENGO', 'Cheirinho');