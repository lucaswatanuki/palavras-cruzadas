DROP TABLE IF EXISTS "banco_palavras";

CREATE DATABASE "banco_palavras";

USE "banco_palavras";

CREATE TABLE "palavras"(
  "id" int not NULL, 
  "palavra" varchar(20) NOT NULL,
  "dica" varchar(255) NOT NULL,
  PRIMARY KEY  ("id", "palavra")
)


INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (1, 'MACACO', 'Primata');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (2, 'ELEFANTE', 'Animal grande e pesado');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (3, 'GATO', 'Felino');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (4, 'CACHORRO', 'Melhor amigo do homem');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (5, 'COBRA', 'Kevin Durant');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (6, 'BESOURO', 'Inseto que gruda no cabelo');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (7, 'Sapo', 'Anfibio verde');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (8, 'LEAO', 'Rei da selva');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (9, 'ZEBRA', 'Possui listras');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (10, 'PEIXE', 'Vive na água');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (11, 'COELHO', 'Animal famoso durante a páscoa');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (12, 'ARROZ', 'Branco');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (13, 'LASANHA', 'Massa folhada assada em forno');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (14, 'SALADA', 'Verde e consumida fria');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (15, 'MIOJO', 'Todo universitário possui em casa');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (16, 'BIFE', 'Pode ser frito ou assado');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (17, 'LANCHE', 'MC Donalds, Subway, BK');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (18, 'MACARRAO', 'Cozido em aprox 8 min, rico em carboidrato');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (19, 'FEIJAO', 'Dá gases');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (20, 'FUTEBOL', 'Esporte mais popular do mundo');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (21, 'BASQUETE', 'Enterradas e crossover');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (22, 'VOLEI', 'Saques e bloqueios');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (23, 'TENIS', 'Raquete');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (24, 'WINDOWS', 'Janelas');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (25, 'LINUX', 'Distribuições');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (26, 'ANDROID', 'Robozinho');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (27, 'JAVA', '.lang');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (28, 'PYTHON', 'Linguagem de programação');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (29, 'APPLE', 'Empresa ostentação');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (30, 'MICROSOFT', 'M$');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (31, 'SPFC', 'Unico tri-mundial no Brasil');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (32, 'CORINTHIANS', '2 mundiais e 1 libertadores');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (33, 'PALMEIRAS', 'Não tem mundial');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (34, 'SANTOS', 'Ninguém liga pra esse time');
INSERT INTO "palavras" ("id", "palavra", "dica")  VALUES (35, 'FLAMENGO', 'Cheirinho');