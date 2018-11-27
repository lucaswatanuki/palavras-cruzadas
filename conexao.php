<!DOCTYPE HMTL>
<HEAD><title>Conexao PHP - banco</title></HEAD>
<body>
<h2>Banco 1</h2>
<?php

//------Conexao p/ banco--------
//
//nome do banco: banco_palavras
//username: root
//senha: *em branco*
//host: localhost
//------------------------------

try{
    $username = "root";
    $password = "";

    $id;
    $conn = new PDO('mysql:host=localhost;dbname=banco_palavras', $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare('SELECT palavra FROM palavras WHERE id_grupo = \'comida\' ');
    $stmt->execute(array('id_grupo'));

    $result = $stmt->fetchAll();

    //$data = $conn->query('SELECT * FROM palavras WHERE id_grupo = '. $conn->quote($name));
    
    if ( count($result) ) { 
        foreach($result as $row) {
          print_r($row);
        }   
    } else {
        echo "Nennhum resultado retornado.";
      }
}
catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}

?>
</body>

</HTML>