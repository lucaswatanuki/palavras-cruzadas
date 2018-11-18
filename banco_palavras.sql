DROP TABLE IF EXISTS `palavras`;
CREATE TABLE `palavras` (
  `id_grupo` varchar(10) NOT NULL default '',
  `palavra` varchar(20) NOT NULL default '',
  `dica` varchar(255) NOT NULL default '',
  PRIMARY KEY  (`palavra`,`id_grupo`),
)


INSERT INTO `palavra` VALUES ('ingles', 'GREEN', 'Color');
INSERT INTO `palavra` VALUES ('ingles', 'BICYCLE', 'A pedal-driven land vehicle');
INSERT INTO `palavra` VALUES ('ingles', 'MOUNTAIN', 'A landform');
INSERT INTO `palavra` VALUES ('ingles', 'SMARTY', 'Templating engine');
INSERT INTO `palavra` VALUES ('ingles', 'ESTONIA', 'One of the Baltic countries');
INSERT INTO `palavra` VALUES ('ingles', 'LATVIA', 'One of the Baltic countries');
INSERT INTO `palavra` VALUES ('ingles', 'RIGA', 'Capital of Latvia');
INSERT INTO `palavra` VALUES ('ingles', 'TALLINN', 'Capital of Estonia');
INSERT INTO `palavra` VALUES ('ingles', 'ZEPPELIN', 'Airship');
INSERT INTO `palavra` VALUES ('ingles', 'COW', 'Animal');
INSERT INTO `palavra` VALUES ('ingles', 'DOG', 'Human''s best friend');
INSERT INTO `palavra` VALUES ('ingles', 'CHEESE', 'A foodstuff made from the curdled milk');
INSERT INTO `palavra` VALUES ('ingles', 'HELLO', 'Greeting');
INSERT INTO `palavra` VALUES ('ingles', 'JAVA', 'Programming language');
INSERT INTO `palavra` VALUES ('ingles', 'MARS', 'The Rise And Fall Of Ziggy Stardust And The Spiders From...');
INSERT INTO `palavra` VALUES ('ingles', 'GOOGLE', 'Search engine');
INSERT INTO `palavra` VALUES ('ingles', 'LINUX', 'Operating system');

INSERT INTO `palavra` VALUES ('comida', 'ARROZ', 'Branco');
INSERT INTO `palavra` VALUES ('comida', 'FEIJAO', 'Dá gases');
INSERT INTO `palavra` VALUES ('comida', 'MACARRAO', 'Rico em carboidratos e fácil de cozinhar');
INSERT INTO `palavra` VALUES ('comida', 'HAMBURGUER', 'Lanche');

