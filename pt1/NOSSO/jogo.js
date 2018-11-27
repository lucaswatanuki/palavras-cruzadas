var grid = [];

var linhas = 15;
var colunas = 30;

var coord = [];

var palavras = ['BICYCLE','SMARTY','GREEN','LINUX','MOUNTAIN','RIGA','ZEPPELIN','GOOGLE','TALLINN','ESTONIA','DOG','COW','LATVIA','HELLO','CHEESE'];

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
	for (var i = 0; i < lin; i++) {
		for (var j = 0; j < col; j++) {
			document.write(grid[i][j] +"|");
		}
		document.write("<br />");
	}
}

function generate(firstword) {

	var mode = false
	var v;
	var currentword = firstword;

	for (var i = 1; i <= palavras.length; i++) {

		var matches = letterMatch(currentword, palavras[i]);

		if (!isEmpty(matches)){
			
			var current = coord[i-1];
			var j = 0;

			while (j < matches.length){
		
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
}

function place(lin, col, word, vertical){
	var l =lin;
	var c = col;

	document.write(word + " == [" + lin + " : " +col + "] <br/>");

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
	for (var i = 0; i < word.length; i++) {
		if (grid[lin][col]!=0&&grid[lin][col]!=word[letterpos]){
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

	//palavras = shuffle(palavras);

	firstword = palavras[0];

	place(6, 15, firstword, true);
	
	generate(firstword);
	//não esta chegando aqui
	display();

	for (var i = 0; i < coord.length; i++) {
		document.write("[" + coord[i] + "] <br />");
	}
}