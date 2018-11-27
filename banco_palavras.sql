DROP TABLE IF EXISTS `palavras`;
CREATE TABLE `palavras` (
  `id_grupo` varchar(10) NOT NULL default '',
  `palavra` varchar(20) NOT NULL default '',
  `dica` varchar(255) NOT NULL default '',
  PRIMARY KEY  (`palavra`,`id_grupo`)
)


INSERT INTO `palavras` VALUES ('ingles', 'GREEN', 'Color');
INSERT INTO `palavras` VALUES ('ingles', 'BICYCLE', 'A pedal-driven land vehicle');
INSERT INTO `palavras` VALUES ('ingles', 'MOUNTAIN', 'A landform');
INSERT INTO `palavras` VALUES ('ingles', 'SMARTY', 'Templating engine');
INSERT INTO `palavras` VALUES ('ingles', 'ESTONIA', 'One of the Baltic countries');
INSERT INTO `palavras` VALUES ('ingles', 'LATVIA', 'One of the Baltic countries');
INSERT INTO `palavras` VALUES ('ingles', 'RIGA', 'Capital of Latvia');
INSERT INTO `palavras` VALUES ('ingles', 'TALLINN', 'Capital of Estonia');
INSERT INTO `palavras` VALUES ('ingles', 'ZEPPELIN', 'Airship');
INSERT INTO `palavras` VALUES ('ingles', 'COW', 'Animal');
INSERT INTO `palavras` VALUES ('ingles', 'DOG', 'Human''s best friend');
INSERT INTO `palavras` VALUES ('ingles', 'CHEESE', 'A foodstuff made from the curdled milk');
INSERT INTO `palavras` VALUES ('ingles', 'HELLO', 'Greeting');
INSERT INTO `palavras` VALUES ('ingles', 'JAVA', 'Programming language');
INSERT INTO `palavras` VALUES ('ingles', 'MARS', 'The Rise And Fall Of Ziggy Stardust And The Spiders From...');
INSERT INTO `palavras` VALUES ('ingles', 'GOOGLE', 'Search engine');
INSERT INTO `palavras` VALUES ('ingles', 'LINUX', 'Operating system');
INSERT INTO `palavras` VALUES ('comida', 'ARROZ', 'Branco');
INSERT INTO `palavras` VALUES ('comida', 'FEIJAO', 'Dá gases');
INSERT INTO `palavras` VALUES ('comida', 'MACARRAO', 'Rico em carboidratos e fácil de cozinhar');
INSERT INTO `palavras` VALUES ('comida', 'HAMBURGUER', 'Lanche');