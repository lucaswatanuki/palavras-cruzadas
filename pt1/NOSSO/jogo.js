var grid = [];

var linhas = 15;
var colunas = 30;

var coord = [];

var palavras = ['TALLINN','MOUNTAIN','RIGA','SMARTY','CHEESE','COW','BICYCLE','GREEN','LINUX','ZEPPELIN','GOOGLE','ESTONIA','DOG','LATVIA','HELLO'];

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

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

function criaMatriz(){
    for (var i = 0; i < linhas; i++) {
        grid[i] = [];
        for (var j = 0; j < colunas; j++) {
            grid[i][j] = 0;
        }
    }
}

function display() {
	for (var i = 0; i < linhas; i++) {
		for (var j = 0; j < colunas; j++) {
			document.write(grid[i][j] +"|");
		}
		document.write("<br />");
	}
}

function furone() {
	for (var i = 0; i < coord.length; i++) {
		document.write(palavras[i] + ":");
		document.write("["+coord[i]+"]/");
	}
}

function generate(firstword) {

	document.write("<h3>##Genrate##</h3><br/>");

	var mode = false;
	var v;
	var j;
	var current;
	var matches;
	var currentword = firstword;

	for (var i = 1; i < palavras.length; i++) {

		//document.write("Contador: " + i +" | Total: " + palavras.length +"<br />");

		matches = letterMatch(currentword, palavras[i]);

		if (!isEmpty(matches)){
			
		/*	for (var m = 0; m < matches.length; m++) {
				document.write("[" + matches[m] + "]/");
			}document.write("<br />");*/

			current = coord[i-1];

			if (!current) {
				current = coord[coord.length-1];
				//document.write("#ERRO#<br />" + current);
				//furone();
			}

			j = 0;

			while (j < matches.length){
				//document.write("@Loop / ");
				if (mode){
					//VERTICAL 			
					v = validate_place(matches[j][1], (current[0]-matches[j][1]), (current[1]+matches[j][0]), mode);
				}
				else{
					//HORIZONTAL
					v = validate_place(matches[j][1] ,(current[0]+matches[j][0]), (current[1]-matches[j][1]), mode);
				}
				if (v) {

					if (mode){
						//VERTICAL
						place(current[0]-matches[j][1], current[1]+matches[j][0], palavras[i], mode); 
					}
					else{
						//HORIZONTAL
						place(current[0]+matches[j][0], current[1]-matches[j][1], palavras[i], mode);
					}
					
					currentword = palavras[i];

					if (mode){ mode = false; }
					else{ mode = true; }

					break;
				}
				else{
					j++;
				}
			}
		}
	}

	//document.write("Aeeeeeeeee <br />");
}

function place(lin, col, word, vertical){
	var l =lin;
	var c = col;

	document.write("Function Place: " + word + " == [" + lin + " : " +col + "] <br/>");

	for (var i = 0; i < word.length; i++) {
		grid[lin][col] = word[i];
		if (vertical) { lin++; }
		else { col++; }
	}

	coord.push([l, c, lin, col]);
}

function validate_place(letterpos, lin, col, word, vertical) {
	//precisa melhorar
	if (lin < 0 || lin > linhas || col < 0 || col > colunas){
		return false;
	}
	for (var i = 0; i <= word.length; i++) {
		if (grid[lin][col]!=0 && grid[lin][col]!=word[letterpos]){
			return false;
		}
		if (vertical){ lin++; }
		else{ col++; }
	}
	return true;
}

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
	
	display();

}