var dadoAtual;
var dadoMatriz;

var grid = [];

var palavras = ['GREEN','BICYCLE','MOUNTAIN','SMARTY','ESTONIA','LATVIA','RIGA','TALLINN','ZEPPELIN','COW','DOG','CHEESE','HELLO','GOOGLE','LINUX'];

function criaMatriz(lin, col){
    for (var i = 0; i < lin; i++) {
        grid[i] = [];
        for (var j = 0; j < col; j++) {
            grid[i][j] = 0;
        }
    }
}

function suggest_coord(word){
    var count = 0;
    var cordlist = [];
    var glc = -1;
    var rowc;
    var colc;
    var given_letter;   
    var e;

    for (var i = 0; i < word.length; i++) {
        glc++;
        rowc = 0;
        given_letter = word[i];
        for (var r = 0; r < 9; r++) {
            rowc++;
            colc = 0;
            for (var c = 0; c < 11; c++) {
                colc++;
                if (given_letter == grid[r][c]) {
                    try{
                        if ((rowc - glc) > 0) {
                            if (((rowc - glc) + word.length) <= 9){ //horizontal
                                cordlist.push([colc, rowc - glc, 1, colc + (rowc - glc), 0]);
                            }
                        }
                    }catch (e){
                        continue;
                    }
                    try{
                        if ((colc - glc) > 0){//vertical
                            if (((colc - glc) + word.length) <= 11){
                                cordlist.push([colc - glc, rowc, 0, rowc + (colc - glc), 0]);
                            }
                        }
                    }catch (e){
                        continue;
                    }
                }
            }
        }
    }
    return cordlist;
}

function fit_and_add(word){
    var fit = false;
    var count = 0;
    var cordlist = suggest_coord(word);

    var vertical;
    var col;
    var row;

    while (!fit && count < 2000){
        if (current_wordlist.length == 0) {
            vertical = Math.floor(Math.random() * 3);
            col = 1;
            row = 1;
            if (check_fit_score(col, row, vertical, word)) {
                fit = true;
                set_word(col, row, vertical, word, true);
            }
        }else{
            try{
                col = coordlist[count][0];
                row = coordlist[count][1];
                vertical = coordlist[count][2];
            }catch (e){
                return 1;
            }
            if (coordlist[count][4]){
                fit = true; 
                set_word(col, row, vertical, word, true);
            }
        }
        count++;
    }
    return 1;
}

function set_word(col, row, vertical, word, force){
    if (force) {
        for (var i = 0; i < word.length; i++) {
            set_cell(col, row, word[i]);
            if (vertical) {
                row++;
            }else{
                col++;
            }
        }
    }
}

function set_cell(col, row, value){
    grid[row-1][col-1] = value;
}

function check_fit_score(col, row, vertical, word){
    if (col < 1 || row < 1){
        return 0;
    }
    var count = 1;
    var score = 1;
    var e;
    var active_cell;

    for (var i = 0; i < word.length; i++) {
        try{
            active_cell = get_cell(col, row);
        }catch (e){
            return 0;
        }
        if (active_cell == 0 || active_cell == word[i]){
            continue;
        }else{
            return 0;
        }
        if (active_cell == word[i]){
            score += 1;
        }

        if (vertical){
            if (active_cell != word[i]){
                if (!check_if_cell_clear(col+1, row)){
                    return 0;
                }
            

                if (!check_if_cell_clear(col-1, row)){
                    return 0;
                }
            }

            if (count == 1){
                if (!check_if_cell_clear(col, row-1)){
                    return 0;
                    }
            }

            if (count == word.length){
                if (!check_if_cell_clear(col, row+1)){ 
                    return 0; 
                }
            }
        }
        if (vertical){
            row++;
        }else{ 
            col++;       
        }
        count++;
    }
    return score;
}

function check_if_cell_clear(col, row){
    try{
        var cell = get_cell(col, row);
        if (cell == 0){
            return true;
        }
    }catch(e){
        return false;
    }
}

function get_cell(col, row){
    return grid[row-1][col-1];
}

function compute_crossword(){
    var spins = 2;
    var count = 0;
    var debug;

    var current_wordlist;
    var avaliable_words = palavras;

    while (count == 0){
        debug++;
        current_wordlist = [];
        var x = 0;
        while (x < spins){
            for (var i = 0; i < avaliable_words.length; i++) {
                if (avaliable_words.indexOf(avaliable_words[i]) <= -1) {
                    fit_and_add(word);
                }
            }
            x++;
        }
        count++;
    }
    return 1;
}

function MatrizJogo(){
    criaMatriz(9, 11);
    document.write(grid);
}

function inicializar(){
    var tabela = document.getElementById("palavras_cruzadas");
    dadoMatriz = MatrizJogo();

        for (var i=0 ; i < dadoMatriz.length ; i++){
            var linha = tabela.insertRow(-1);
            var dadoLinha = dadoMatriz[i];

            for(var j=0 ; j < dadoLinha.length ; j++){
                var cel = linha.insertCell(-1);

                if(dadoLinha[j] != 0){
                    var textoID = String('texto' + '_' + i + '_' + j);
                    cel.innerHTML ='<input type="text" class="formulario" style="text-transform: uppercase" maxlength="1" ' + 'id="' + textoID + '">';
                } else {
                    cel.style.backgroundColor = "black";
                }
            }
        }
        numeros_Dica();
    }


function numeros_Dica(){
    document.getElementById("texto_0_5").placeholder = "1";
    document.getElementById("texto_2_6").placeholder = "2";
    document.getElementById("texto_5_4").placeholder = "3";
    document.getElementById("texto_7_0").placeholder = "4";
    document.getElementById("texto_2_4").placeholder = "5";
    document.getElementById("texto_0_7").placeholder = "6";
    document.getElementById("texto_2_1").placeholder = "7";
}


function checar() {
    for (var i = 0; i < dadoMatriz.length; i++) {
        var dadoLinha = dadoMatriz[i];
        for (var j = 0; j < dadoLinha.length; j++) {
            if (dadoLinha[j] != 0) {
                var celula = document.getElementById('texto' + '_' + i + '_' + j);
                if (celula.value != dadoMatriz[i][j]) {
                    celula.style.backgroundColor = 'red';
                } else {
                    celula.style.backgroundColor = 'green';
                }
            }    
        }
    }
}