var grid = [];

var inagrid = [];
var coord = [];

var lin = 15;
var col = 15;

var palavras = ['GREEN','BICYCLE','MOUNTAIN','SMARTY','ESTONIA','LATVIA','RIGA','TALLINN','ZEPPELIN','COW','DOG','CHEESE','HELLO','GOOGLE','LINUX'];

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

function criaMatriz(){
    for (var i = 0; i < lin; i++) {
        grid[i] = [];
        for (var j = 0; j < col; j++) {
            grid[i][j] = 0;
        }
    }
}

function display() {
	for (var i = 0; i < lin; i++) {
		for (var j = 0; j < col; j++) {
			document.write(grid[i][j] + " ");
		}
		document.write("<br />");
	}
}

function first() {
	var col = parseInt(11/2);
	
	firstword = palavras[0];

	place(0, col, firstword, true);

}

function validate(codcross, word, match, vertical) {
	if (!vertical) {
		var l = codcross[0]+match[0];
		var c = codcross[3];
		document.write( l+" : "+c  +" | "+grid[l][c] + "<br />");
		if ((c-match[1])<0|| c + (word.length - match[1])){
			return false;
		}
		var x = c-match[1];
		for (var i = 0; i < word.length; i++) {
			if (grid[l][x] != 0 || grid[l][c]!=word[match[1]]){
				return false;
			}
		}

		return true;
	}
}

function generate() {
	var control = false;
	currentword = palavras[0];
	for (var i = 1; i <= palavras.length; i++) {
		matches = letterMatch(currentword, palavras[i]);
		if (!isEmpty(matches)){
			
			document.write(currentword + " | " + palavras[i] + "<br />");

			for (var c = 0; c < matches.length; c++) {
				document.write("[" + matches[c] + "]" + " - ");
			}
			document.write("<br />"); 

			currentword = palavras[i];
				
		}
	}
}

function place(lin, col, word, vertical){
	var l =lin;
	var c = col;

	for (var i = 0; i < word.length; i++) {
		grid[lin][col] = word[i];
		if (vertical) { lin++; }
		else { col++; }
	}

	inagrid.push(word);
	coord.push([l, c, lin, col]);
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
	first();
	display();
	generate();
}