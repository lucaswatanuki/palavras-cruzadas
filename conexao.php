<!DOCTYPE HMTL>
<HEAD><title>Conexao PHP - banco</title></HEAD>
<body>
<h2>Banco De Palavras</h2>
<?php

//------Conexao p/ banco--------
//
//nome do banco: banco_palavras
//username: root
//senha: *em branco*
//host: localhost
//
//------------------------------

/* MUDANÇAS NO SCRIPT SQL: 
linha 6: PRIMARY KEY  (`palavra`,`id_grupo`) (exclusao da virgual final, para criação da tabela)
linha 10-31: INSERT INTO `palavras` VALUES (adicionado o 's' em 'palavras', para a inserção correta na tabela).
*/

try{
    $username = "root";
    $password = "";

    $id;
    $conn = new PDO('mysql:host=localhost;dbname=banco_palavras', $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->query("SELECT * FROM palavras");
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<p>id_grupo: ".$row["id_grupo"]."</p>";
        echo "<p>palavra: ".$row["palavra"]."</p>";
        }        

}
catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}

?>
</body>

</HTML>