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

function conectar(){ //IMPLEMENTAÇÃO DO PDO EM FUNÇÃO, PARA APENAS CHAMAR A FUNÇÃO conectar() NA PÁGINA.
    try{
        $username = "root";
        $password = "";

        $conn = new PDO('mysql:host=localhost;dbname=banco_palavras', $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->query("SELECT * FROM palavras"); //statement para consulta (query)
        
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {  //exemplo de retorno da consulta. Deve se fazer por post para implementar na pagina.
            echo "<p>id_grupo: ".$row["id_grupo"]."</p>";
            echo "<p>palavra: ".$row["palavra"]."</p>";
            }
    }
    catch(PDOException $e) {
        echo 'ERROR: ' . $e->getMessage(); //aqui pode se adicionar um script de retorno junto com o tratamento.
    }
}

conectar(); //teste da função

?>
</body>

</HTML>