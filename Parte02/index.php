<!DOCTYPE html>
<html>

<head>

	<meta charset="utf-8">

	<title>Palavras Cruzadas</title>

	<link rel="stylesheet" href="style.css">

	<?php

				$caminho="localhost";
				$nome="teste";
				$senha="password";
				$nomebanco="banco_palavras";
				global $connect;

				//**Lembrar de importar o arquivo .SQL no MariaDB */
				if($connect=mysqli_connect($caminho,$nome,$senha,$nomebanco)){
					mysqli_select_db($connect,$nomebanco) or die ("Erro ao selecionar o Banco de Dados. Arrume o Banco de Dados.");
					mysqli_query($connect,"SET names 'utf8'"); //Envia uma consulta MySQL. Define que os nomes estão em utf8.
					mysqli_query($connect,"SET character_set_connection='utf8'"); //Envia uma consulta MySQL. Conexão em utf8.
					mysqli_query($connect,"SET character_set_cliente='utf8'"); //Envia uma consulta MySQL. Servidor em utf8
					mysqli_query($connect,"SET character_set_results='utf8'"); ////Envia uma consulta MySQL. Pegar resultados em utf8.
				}else{
					die("Erro");
				}
			
					
			$resul=mysqli_query($connect, "SELECT palavra, dica FROM palavras ORDER BY rand() LIMIT 15");

			$palavras = array();
			$dicas = array();
			$i = 0;

			while ($row=mysqli_fetch_array($resul)){
				array_push($palavras, $row['palavra']);
				$dicas[] = $row['dica'];
				$i++;
			}

			$i--;

			$palavras = json_encode($palavras);
			$script = "<script> var palavras = ".$palavras.";</script>";
			echo "$script";
		?>

	<script type="text/javascript">
		//Matriz do jogo (Tabuleiro)
		var grid = [];
		//Dimensões da matriz (Tabuleiro)
		var linhas = 15;
		var colunas = 30;
		//Lista para armazenar as coordenadas das palavras inseridas na matriz
		var coord = [];
		//var coorddica = [];
		//Função para embaralhar a Lista de palavras
		function shuffle(array) {
			var currentIndex = array.length, temporaryValue, randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			return array;
		}
		//Função para verificar se existe elementos em uma estrutura
		function isEmpty(obj) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop))
					return false;
			}
			return true;
		}
		//Inicializa a matriz (Tabuleiro), com '0'
		function criaMatriz() {
			for (var i = 0; i < linhas; i++) {
				grid[i] = [];
				for (var j = 0; j < colunas; j++) {
					grid[i][j] = 0;
				}
			}
		}
		//Mostra a matriz de maneira usual
		function display() {
			document.write("<h3>##Matriz##</h3>")
			for (var i = 0; i < linhas; i++) {
				for (var j = 0; j < colunas; j++) {
					document.write(grid[i][j] + "    ");
				}
				document.write("<br />");
			}
		}
		//Gera o jogo, computa as palavras
		function generate(firstword) {
			var mode = false;
			var v;
			var j;
			var current;
			var matches;
			var currentword = firstword;
			for (var i = 1; i < palavras.length; i++) {//Percorre as palavras da lista de palavras
				matches = letterMatch(currentword, palavras[i]); //Verifica combinação das letras
				if (!isEmpty(matches)) { //verifica se existe combinações
					current = coord[i - 1]; //Pega as coordenadas da ultima palavra inserida
					if (!current) { //Verifica se ela existe
						current = coord[coord.length - 1]; //Caso não exista seu indice é ajustado
					}
					j = 0;
					while (j < matches.length) { //Verificar cada uma das combinações
						if (mode) { //Verifica a posição da proxima palavra, no caso se for Vertical		
							//Valida posição a ser inserida	
							v = validate_place(matches[j][1], (current[0] - matches[j][1]), (current[1] + matches[j][0]), palavras[i], mode);
						}
						else {//Se não for vertical é Horizontal
							v = validate_place(matches[j][1], (current[0] + matches[j][0]), (current[1] - matches[j][1]), palavras[i], mode);
						}
						if (v) { //Se pode ser inserida ele insere
							if (mode) {
								//Insere na Vertical
								place(current[0] - matches[j][1], current[1] + matches[j][0], palavras[i], mode);
							}
							else {
								//Insere na Horizontal
								place(current[0] + matches[j][0], current[1] - matches[j][1], palavras[i], mode);
							}

							//Atualiza a palavra atual
							currentword = palavras[i];
							//Muda o sentido da proxima palavra
							if (mode) { mode = false; }
							else { mode = true; }
							break;
						}
						else {
							j++;
						}
					}
				}
			}
		}
		//Insere palavra na matriz (Tabuleiro)
		function place(lin, col, word, vertical) {
			var l = lin;
			var c = col;
			for (var i = 0; i < word.length; i++) {
				grid[lin][col] = word[i];
				if (vertical) { lin++; }
				else { col++; }
			}
			coord.push([l, c, lin, col]);
			//coorddica.push(dicas[palavras.indexOf(word)]);
		}
		//Valida a posição a ser inserida
		function validate_place(letterpos, lin, col, word, vertical) {
			//precisa melhorar
			if (lin < 0 || lin > linhas || col < 0 || col > colunas) {
				return false;
			}
			for (var i = 0; i <= word.length; i++) {
				if (grid[lin][col] != 0 && grid[lin][col] != word[letterpos]) {
					return false;
				}
				if (vertical) { lin++; if (lin == linhas) { return false; } }
				else { col++; if (col == colunas) { return false; } }
			}
			return true;
		}
		//Verifica combinações de letras entre as palavras
		function letterMatch(palavra1, palavra2) {
			matches = [];
			for (var i = 0; i < palavra1.length; i++) {
				for (var j = 0; j < palavra2.length; j++) {
					if (palavra1[i] == palavra2[j]) {
						matches.push([palavra1.indexOf(palavra1[i]), palavra2.indexOf(palavra2[j])]);
					}
				}
			}
			return matches;
		}
		function main() {
			criaMatriz();
			palavras = shuffle(palavras);
			firstword = palavras[0];
			place(3, 10, firstword, true);

			generate(firstword);
		}
		function inicializar() {
			var tabela = document.getElementById("palavras_cruzadas");
			main();
			dadoMatriz = grid;
			for (var i = 0; i < dadoMatriz.length; i++) {
				var linha = tabela.insertRow(-1);
				var dadoLinha = dadoMatriz[i];
				for (var j = 0; j < dadoLinha.length; j++) {
					var cel = linha.insertCell(-1);
					if (dadoLinha[j] != 0) {
						var textoID = String('texto' + '_' + i + '_' + j);
						cel.innerHTML = '<input type="text" class="formulario" style="text-transform: uppercase" maxlength="1" ' + 'id="' + textoID + '">';
					} else {
						cel.style.backgroundColor = "black";
					}
				}
			}
			numeros_Dica();

		}
		function numeros_Dica() {
			for (var i = 0; i < coord.length; i++) {
				document.getElementById("texto_" + coord[i][0] + "_" + coord[i][1]).placeholder = i + 1;
			}

		}
		function checar() {
			for (var i = 0; i < linhas; i++) {
				for (var j = 0; j < colunas; j++) {
					if (grid[i][j] != 0) {
						var elemento = document.getElementById('texto' + '_' + i + '_' + j);
						var letra = elemento.value;
						letra = letra.toUpperCase();
						if (letra != grid[i][j]) {
							elemento.style.backgroundColor = 'red';
						}
						else {
							elemento.style.backgroundColor = 'green';
						}
					}
				}
			}
		}
		function limpar() {
			for (var i = 0; i < linhas; i++) {
				for (var j = 0; j < colunas; j++) {
					if (grid[i][j] != 0) {
						var elemento = document.getElementById('texto' + '_' + i + '_' + j);
						elemento.style.backgroundColor = 'white';
					}
				}
			}
		}
	</script>



</head>

<body onload="inicializar()">

	<div id="superior">
		<input class="botao" type="submit" value="Checar" onclick="checar()">
		<input class="botao" type="submit" value="Limpar" onclick="limpar()">
		<input class="botao" type="submit" value="Novo jogo" onclick="history.go(0)">
	</div>

	<div id="fundo_jogo">
		<table id="palavras_cruzadas">

		</table>
	</div>
	<div id="dica">
		<h3>DICAS</h3>
		<hr>
		<p class="subtitulo">Os índices indicam se está na vertical ou horizontal.</p>
		<p class="subtitulo">Ímpares = Vertical | Pares = Horizontal </p>
		<hr>

		<p>Dicas aqui (Atenção! Algumas não estão no jogo!!!)</p>
		<?php 
		while($i >= 0){
			echo"|".($dicas[$i])."| <br>";
			$i--;
		}
		?>
	</div>

</body>

</html>